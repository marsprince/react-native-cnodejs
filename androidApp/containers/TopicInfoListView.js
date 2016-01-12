/**
 * Created by mars on 2015/11/16.
 * 每个帖子的详情列表
 */

var React = require('react-native')
var moment = require('moment')

var TopicService = require('../services/TopicService')

var window = require('../util/window')

var { width, height } = window.get()

var {
    View,
    StyleSheet,
    ScrollView,
    Component,
    Text,
    Image,
    ListView,
    TouchableHighlight,
    InteractionManager,
    ToastAndroid
    } = React
var dismissKeyboard = require('dismissKeyboard');
var NavigationTitleBar=require("./../components/ToolBar/TopicToolBar");
var TopicInfoRow=require("./../components/rowModule/TopicInfoRow")
import CommentRow from './../components/rowModule/CommentRow'
import {alertLogin} from './../components/alertModule/alertLogin'

import Loading from './../components/Loading.js'
import Error from './../components/Error.js'
import ReplyRow from './../components/rowModule/ReplyRow.js'

class TopicInfoListView extends Component {
    constructor(porps) {
        super(porps)
        var replyDs = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
        this.state = {
            replyDs: replyDs,
            topicDs:null, //topic
            isLoading: true,
            isReady:false,
            replyContent:"",//content
            replyId:"",//replyId
            defaultValue:"",
            hasTopic:true
        }
    }

    _genRows(){
        TopicService.req.getTopicById(this.props.id)
            .then(topic=> {
                    this.setState({
                        isLoading: false,
                        topicDs:topic,
                        replyDs: this.state.replyDs.cloneWithRows(topic.replies),
                    })
            })
            .catch(err=> {
                this.setState({
                    isLoading: false,
                    hasTopic: false
                })
            })
            .done((err)=> {
                this.isFreshing = false
                this.setState({
                    isLoading: false,
                    err: err
                })
            })
    }

    componentDidMount() {
        InteractionManager.runAfterInteractions(() => {
            this.setState({isReady: true});
            this._genRows()
        })
    }
    componentDidUpdate(){
        if(this.props.state.topicState.replySuccess)
        {
            ToastAndroid.show("回复成功！",ToastAndroid.SHORT)
            dismissKeyboard();
        }
    }


    _renderRow(reply, sectionId, rowId, highlightRow) {
        return (
            <CommentRow
                //ref={view => this.listRows[rowId.toString()]=view}
                reply={reply}
                row={parseInt(rowId)+1}
                router={this.props.router}
                state={this.props.state}
                actions={this.props.actions}
                replyOnePress={this._replyOnePress.bind(this,reply)}
                >
            </CommentRow>
        )
    }
    _replyOnePress(reply){
        this.setState({
            defaultValue:this.state.replyContent?"@"+reply.author.loginname+" "+this.state.replyContent:"@"+reply.author.loginname+" ",
            replyId:reply.id
        })
    }
    _onChangeText(value){
        this.setState({
            replyContent:value
        })
    }
    _renderHeader()
    {
        return(
            <TopicInfoRow topic={this.state.topicDs} router={this.props.router}>
            </TopicInfoRow>
        )
    }

    _onPress(){
        if(!this.state.replyContent || this.state.replyContent==="")
        {
            ToastAndroid.show("回复内容不能为空！",ToastAndroid.SHORT)
            return ;
        }
        if(this.props.state.userState.isLogin)
        {
           const {topicDs,replyContent,replyId}=this.state
           this.props.actions.reply(topicDs.id,replyContent,this.props.state.userState.accesstoken,replyId)//reply
        }
        else{
            alertLogin(this.props.router)
        }
    }

    render() {
        if (!this.state.isReady || this.state.isLoading) {
            return (
                <View style={{flex:1}}>
                    <NavigationTitleBar text="话题" router={this.props.router}>
                    </NavigationTitleBar>
                    <View style={{flex:1,alignItems:'center',justifyContent :'center'}}>
                        <Loading>
                        </Loading>
                    </View>
                </View>
            )
        }

        if(!this.state.hasTopic)
        {
            return (
                <View style={{flex:1}}>
                    <NavigationTitleBar text="话题" router={this.props.router}>
                    </NavigationTitleBar>
                    <Error text="获取话题失败，话题不存在或已删除">
                    </Error>
                </View>
            )
        }
        return (
            <View style={{flex:1}}>
               <NavigationTitleBar text="话题" router={this.props.router}>
               </NavigationTitleBar>

                <ListView
                    ref={view => {this._listView = view}}
                    style={{backgroundColor:'rgba(255,255,255,1)',marginBottom:60}}
                    //onScroll={()=>onScroll()}
                    showsVerticalScrollIndicator={true}
                    initialListSize={10}
                    pagingEnabled={false}
                    dataSource={this.state.replyDs}
                    renderRow={this._renderRow.bind(this)}
                    renderHeader={()=>this._renderHeader()}
                    />
                <ReplyRow text={this.state.defaultValue} onChangeText={(value)=>this._onChangeText(value)} onPress={this._onPress.bind(this)}>
                </ReplyRow>
            </View>
        )
    }
}

module.exports = TopicInfoListView;

