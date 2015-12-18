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
    InteractionManager
    } = React

var NavigationTitleBar=require("./../components/ToolBar/TopicToolBar");
var TopicInfoRow=require("./../components/TopicInfoRow")
import CommentRow from './../components/CommentRow'
import {alertDialog} from './../components/alertModule/alert.ios'

import Loading from './../components/Loading.js'
import ReplyRow from './../components/ReplyRow.js'

class TopicInfoListView extends Component {
    constructor(porps) {
        super(porps)
        var replyDs = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
        this.state = {
            replyDs: replyDs,
            topicDs:null,
            isLoading: true,
            isReady:false,
            replyContent:"",
            defaultValue:""
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
                console.warn(err)
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

    _renderRow(reply, sectionId, rowId, highlightRow) {
        return (
            <CommentRow
                //ref={view => this.listRows[rowId.toString()]=view}
                reply={reply}
                row={parseInt(rowId)+1}
                router={this.props.router}
                replyOnePress={this._replyOnePress.bind(this,reply)}
                >
            </CommentRow>
        )
    }
    _replyOnePress(reply){
        this.setState({
            defaultValue:this.state.replyContent?"@"+reply.author.loginname+" "+this.state.replyContent:"@"+reply.author.loginname+" "
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
        if(this.props.state.userState.isLogin)
        {
           //reply
        }
        else{
            alertDialog()
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
