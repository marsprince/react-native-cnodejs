// React-Native Module
var React = require('react-native')
var ScrollableTabView = require('react-native-scrollable-tab-view')

var UserService = require('../services/UserService')
var deviceWidth = require('Dimensions').get('window').width;
var deviceHeight=require('Dimensions').get('window').height

var Icon = require('react-native-vector-icons/MaterialIcons');

import UserRow from '../components/rowModule/UserRow.js'
import DefaultTabBar from '../components/DefaultTabBar'
import ImageCircle from '../components/ImageCircle.js'

/*moment*/
import moment from "moment"
import zh_cn from "moment/locale/zh-cn.js"
moment.locale('zh-cn',zh_cn)

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
    _onPress()
    {
        if (this.props.router && this.props.router.length > 1) {
            this.props.router.pop();
        }
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
                <Image source={require('../../image/user_detail_header_bg.png')}  style={{width:deviceWidth,height:deviceHeight/3}}>
                    <View style={styles.avatar}>
                        <ImageCircle url={userInfo.avatar_url} height={deviceHeight/8} width={deviceHeight/8} borderRadius={deviceHeight/16}>
                        </ImageCircle>
                        <Text style={styles.loginname}>
                            {userInfo.loginname}
                        </Text>
                        <Text style={styles.githubUsername}>
                            {userInfo.githubUsername+'@github.com'}
                        </Text>
                    </View>
                    <View style={styles.info}>
                        <View style={{flex:1}}>
                            <Text style={styles.regTime}>
                                注册时间：{moment(userInfo.create_at).format('YYYY-MM-DD')}
                            </Text>
                        </View>
                        <View style={{flex:1}}>
                            <Text style={styles.score}>
                                积分：{userInfo.score}
                            </Text>
                        </View>
                    </View>
                </Image>

                <TouchableHighlight onPress={this._onPress.bind(this)}  style={styles.backArrow}>
                        <Icon name="arrow-back" size={30} color="#000000" style={styles.back}/>
                </TouchableHighlight>

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
    avatar:{
        flex:4,
        paddingTop:20,
        alignItems:'center',
    },
    info:{
        justifyContent:'center',
        paddingRight:10,
        paddingLeft:10,
        flex:1,
        flexDirection:'row',
    },
    regTime:{
        textAlign:'left',
        fontSize: 14,
        lineHeight: 20,
    },
    score:{
        textAlign:'right',
        fontSize: 14,
        lineHeight: 20,
    },
    loginname:{
        fontSize: 18,
        lineHeight: 24,
    },
    githubUsername:{
        fontSize: 18,
        lineHeight: 24,
        textDecorationLine:'underline',
        textDecorationStyle:'solid',
        fontWeight:'bold'
    },
    backArrow:{
        position:'absolute',
        left:5,
        top:0
    },
    back:{
        marginTop:7,
    }
});

module.exports=User


