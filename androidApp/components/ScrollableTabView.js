/**
 * @author brentvatne
 * @github https://github.com/brentvatne/react-native-scrollable-tab-view
 * @name CustomTabBar
 * @added marsprince
 */
'use strict';

var React = require('react-native');
var ScrollableTabView = require('react-native-scrollable-tab-view');
var CustomTabBar=require('./CustomTabBar');
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
                <ScrollableTabView edgeHitWidth={deviceWidth/2} renderTabBar={() => <CustomTabBar />}>
                    <ScrollView tabLabel="最新" style={styles.tabView}>
                        <TopicRow topic={topic.data} style={styles.card}>

                        </TopicRow>
                        <TopicRow topic={topic.data} style={styles.card}>

                        </TopicRow>
                        <TopicRow topic={topic.data} style={styles.card}>

                        </TopicRow>
                    </ScrollView>
                    <ScrollView tabLabel="分享" style={styles.tabView}>
                        <View style={styles.card}>
                            <Text>Friends</Text>
                        </View>
                    </ScrollView>
                    <ScrollView tabLabel="问答" style={styles.tabView}>
                        <View style={styles.card}>
                            <Text>Messenger</Text>
                        </View>
                    </ScrollView>
                    <ScrollView tabLabel="招聘" style={styles.tabView}>
                        <View style={styles.card}>
                            <Text>Notifications</Text>
                        </View>
                    </ScrollView>
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
        width: deviceWidth,
        backgroundColor: 'rgba(0,0,0,0.01)',
    },
    card: {
        borderWidth: 1,
        backgroundColor: '#fff',
        borderColor: 'rgba(0,0,0,0.1)',
        margin: 5,
        height: 150,
        padding: 15,
        shadowColor: '#ccc',
        shadowOffset: {width: 2, height: 2},
        shadowOpacity: 0.5,
        shadowRadius: 3,
    },
});

module.exports=ScrollableTabViewExample