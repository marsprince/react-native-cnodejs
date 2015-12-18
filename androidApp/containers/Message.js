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

var cnodeUtil=require('../util/cnodeUtil')

class Message extends Component{
    constructor(porps) {
        super(porps)
        this.state={
            selectedTab:0,
        }
    }

    render() {

        return (
            <View style={styles.container}>
                <ScrollableTabView edgeHitWidth={deviceWidth/2} renderTabBar={() => <DefaultTabBar />} style={{flex:1}} >
                    <View tabLabel='未读信息'>
                        <MessageListView router={this.props.router} tab={tab['tab']} isRead={false}>

                        </MessageListView>
                    </View>
                    <View tabLabel='已读信息'>
                        <MessageListView router={this.props.router} tab={tab['tab']} isRead={true}>

                        </MessageListView>
                    </View>
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

module.exports=Message