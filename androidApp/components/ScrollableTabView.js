/**
 * @author brentvatne
 * @github https://github.com/brentvatne/react-native-scrollable-tab-view
 * @name CustomTabBar
 * @added marsprince
 */
'use strict';

var React = require('react-native');
var ScrollableTabView = require('react-native-scrollable-tab-view');

var DefaultTabBar=require("./DefaultTabBar")
var deviceWidth = require('Dimensions').get('window').width;
var {
  StyleSheet,
  Text,
  View,
    ScrollView,
} = React;

var TopicListView=require('./TopicListView');
var TopicRow=require('./TopicRow')
var topic=require('../mocks/topic')
var ScrollableTabViewExample = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                <ScrollableTabView edgeHitWidth={deviceWidth/2} renderTabBar={() => <DefaultTabBar />} style={{flex:1}}>
                    <View tabLabel="最新" style={styles.tabView}>
                       <TopicListView router={this.props.router} >

                       </TopicListView>
                    </View>
                    <View tabLabel="分享" style={styles.tabView} >
                        <TopicListView router={this.props.router} tab="share">

                        </TopicListView>
                    </View>
                    <View tabLabel="问答" style={styles.tabView} >
                        <TopicListView router={this.props.router} tab="ask">

                        </TopicListView>
                    </View>
                    <View tabLabel="招聘" style={styles.tabView} >
                        <TopicListView router={this.props.router} tab="job">

                        </TopicListView>
                    </View>
                </ScrollableTabView>
            </View>
        );
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30,
    },
    tabView: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.01)',
    },
});

module.exports=ScrollableTabViewExample