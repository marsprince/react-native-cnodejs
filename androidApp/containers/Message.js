/**
 * Created by liujia on 2015/12/17.
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

var MessageListView=require('../components/MessageListView');
//var ScrollableTabView = Platform.OS=="android"?require("./ScrollableTabViewAndroid/ViewPager"):require('react-native-scrollable-tab-view');
var ScrollableTabView=require('react-native-scrollable-tab-view')
var DefaultTabBar=require("../components/DefaultTabBar")
var NavigationTitleBar=require("./../components/ToolBar/TopicToolBar");

class Message extends Component{
    constructor(porps) {
        super(porps)
    }
    _onChangeTab(){

    }
    componentDidMount() {
        this.props.actions.loadAccessToken()
    }

    render() {

        return (
            <View style={{flex:1}}>
                <NavigationTitleBar text="消息" router={this.props.router}>
                </NavigationTitleBar>
                <View style={styles.container}>
                    <ScrollableTabView onChangeTab={this._onChangeTab.bind(this)} edgeHitWidth={deviceWidth/2} renderTabBar={() => <DefaultTabBar />} style={{flex:1}} >
                        <View tabLabel='未读信息' style={{flex:1}}>
                            <MessageListView router={this.props.router} state={this.props.state} actions={this.props.state} isRead={false}>

                            </MessageListView>
                        </View>
                        <View tabLabel='已读信息' style={{flex:1}}>
                            <MessageListView router={this.props.router} state={this.props.state} actions={this.props.state} isRead={true}>

                            </MessageListView>
                        </View>
                    </ScrollableTabView>
                </View>
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

module.exports=Message