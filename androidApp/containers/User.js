// React-Native Module
var React = require('react-native')
var moment = require('moment')
var ScrollableTabView = require('react-native-scrollable-tab-view')

var UserService = require('../services/UserService')
var deviceWidth = require('Dimensions').get('window').width;
var deviceHeight=require('Dimensions').get('window').height

import UserRow from '../components/UserRow.js'
import DefaultTabBar from '../components/DefaultTabBar'
import ImageCircle from '../components/ImageCircle.js'
var {
    View,
    StyleSheet,
    ScrollView,
    Component,
    Text,
    StatusBarIOS,
    Image,
    ListView,
    TouchableHighlight,
    TouchableOpacity,
    Navigator,
    ActivityIndicatorIOS,
    } = React


class User extends Component{
    constructor(porps) {
        super(porps)
        var initDs = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
        this.state = {
            topicDs: initDs,
            replyDs: initDs,
            isLoading: true,
            userInfo:null
        }
    }

    componentDidMount() {
        this._genRows();
    }


    _onChangeTab(){

    }
    _genRows(){
        UserService.req.getUserInfo(this.props.loginname)
            .then(user=> {
                this.setState({
                    isLoading: false,
                    userInfo:user,
                    topicDs: this.state.topicDs.cloneWithRows(user.recent_topics),
                    replyDs: this.state.replyDs.cloneWithRows(user.recent_replies),
                })
            })
            .catch(err=> {
                console.warn(err)
            })
            .done((err)=> {
                this.setState({
                    isLoading: false,
                    err: err
                })
            })
    }

    _renderRow(topic, sectionId, rowId, highlightRow) {
        return (
            <UserRow
                //ref={view => this.listRows[rowId.toString()]=view}
                topic={topic}
                router={this.props.router}
                >
            </UserRow>
        )
    }

    render() {
       if(this.state.isLoading)
       {
           return null
       }
        let {userInfo}=this.state
        return (
            <View style={{flex:1}}>
                <View>
                    <Image source={require('../../image/user_detail_header_bg.png')}  style={{width:deviceWidth,height:deviceHeight/3,resizeMode :'stretch'}}>
                    </Image>
                    <View style={styles.userInfo}>
                        <ImageCircle url={userInfo.avatar_url} height={40} width={40}>
                        </ImageCircle>
                    </View>
                </View>

                <View style={styles.container}>
                    <ScrollableTabView onChangeTab={this._onChangeTab.bind(this)} edgeHitWidth={deviceWidth/2} renderTabBar={() => <DefaultTabBar />} style={{flex:1}} >
                        <View tabLabel='最近回复' style={{flex:1}}>
                            <ListView
                                ref={view => {this._listView = view}}
                                style={{backgroundColor:'rgba(255,255,255,1)',marginBottom:60}}
                                //onScroll={()=>onScroll()}
                                showsVerticalScrollIndicator={true}
                                initialListSize={10}
                                pagingEnabled={false}
                                dataSource={this.state.replyDs}
                                renderRow={this._renderRow.bind(this)}

                                />
                        </View>
                        <View tabLabel='最近发布' style={{flex:1}}>
                            <ListView
                                ref={view => {this._listView = view}}
                                style={{backgroundColor:'rgba(255,255,255,1)',marginBottom:60}}
                                //onScroll={()=>onScroll()}
                                showsVerticalScrollIndicator={true}
                                initialListSize={10}
                                pagingEnabled={false}
                                dataSource={this.state.topicDs}
                                renderRow={this._renderRow.bind(this)}

                                />
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
    navBar:{
        position:'absolute',
        top:0,
        backgroundColor: '#2C2C2C',
        flexDirection:"row",
        paddingLeft:10,
    },
    userInfo:{
        position:'absolute',
        top:0,
    }
});

module.exports=User


