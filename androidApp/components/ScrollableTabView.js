/**
 * @author brentvatne
 * @github https://github.com/brentvatne/react-native-scrollable-tab-view
 * @name CustomTabBar
 * @added marsprince
 */
'use strict';

var React = require('react-native');

var deviceWidth = require('Dimensions').get('window').width;
var {
    Component,
  StyleSheet,
  Text,
  View,
    ScrollView,
    Platform,
    ToastAndroid
} = React;

var TopicListView=require('./TopicListView');
var ScrollableTabView = Platform.OS=="android"?require("./ScrollableTabViewAndroid/ViewPager"):require('react-native-scrollable-tab-view');
//var ScrollableTabView=require('react-native-scrollable-tab-view')
var DefaultTabBar=require("./DefaultTabBar")

var cnodeUtil=require('../util/cnodeUtil')

class ScrollableTabViewExample extends Component{
    constructor(porps) {
        super(porps)
        this.data=[
            {tab:""},
            {tab:"share"},
            {tab:"ask"},
            {tab:"job"},
        ];
        this.state={
           tabData:this.data,
            selectedTab:0,
        }
    }

    _renderTab()
    {
        return this.state.tabData.map((tab,i) => {
            if(!tab['tab'])
            {
                return (
                    <View key={i} tabLabel="最新" style={styles.tabView}>
                        <TopicListView router={this.props.router} isRender={i==this.state.selectedTab?true:false}>

                        </TopicListView>
                    </View>
                )
            }
            else
            {
                return (
                    <View key={i} tabLabel={cnodeUtil.getCategory(tab['tab'])} style={styles.tabView}>
                        <TopicListView router={this.props.router} tab={tab['tab']} isRender={i==this.state.selectedTab?true:false}>

                        </TopicListView>
                    </View>
                )
            }

        })
    }

    _onChangeTab({i,ref}){
        setTimeout(()=>{
            this.setState({
                selectedTab:i
            })
        },300)
    }

    render() {

        return (
            <View style={styles.container}>
                <ScrollableTabView onChangeTab={this._onChangeTab.bind(this)} position="top" bar='tabs' edgeHitWidth={deviceWidth/2} renderTabBar={() => <DefaultTabBar />} style={{flex:1}} >
                    {this._renderTab()}
                </ScrollableTabView>
            </View>
        );
    }
};

var styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tabView: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.01)',
    },
});

module.exports=ScrollableTabViewExample