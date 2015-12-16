/**
 * Created by mars on 2015/11/16.
 * 每个帖子的详情列表
 */

var React = require('react-native')
var moment = require('moment')

var TopicService = require('../services/TopicService')
var TopicInfoRow = require('./TopicInfoRow');

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
    ActivityIndicatorIOS,
    TouchableHighlight,
    InteractionManager
    } = React

var NavigationTitleBar=require("./ToolBar/BasicToolBar");
var TopicInfoRow=require("./TopicInfoRow")
import CommentRow from './CommentRow'

import Loading from './Loading.js'
import ReplyRow from './ReplyRow.js'

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
                <ReplyRow text={this.state.defaultValue} onChangeText={(value)=>this._onChangeText(value)}>
                </ReplyRow>
            </View>
        )
    }
}


var styles = StyleSheet.create({
    "row": {
        "height": 90,
        "flexDirection": "row",
        "borderBottomColor": "rgba(0, 0, 0, 0.02)",
        "borderBottomWidth": 1,
        "paddingTop": 25,
        "paddingRight": 0,
        "paddingBottom": 25,
        "paddingLeft": 20
    },
    "imgWrapper": {
        "width": 90,
        "position": "absolute",
        "left": 20,
        "top": 25,
        "height": 65
    },
    "img": {
        "height": 40,
        "width": 40,
        "borderRadius": 20
    },
    "topic": {
        "marginLeft": 60
    },
    "title": {
        "fontSize": 15
    },
    "topicFooter": {
        "marginTop": 12,
        "flexDirection": "row"
    },
    "topicFooter text": {
        "fontSize": 11,
        "color": "rgba(0, 0, 0, 0.5)"
    },
    "topicFooter date": {
        "position": "absolute",
        "right": 0,
        "top": 0
    },
    "topicFooter count": {
        "marginRight": 15
    },
    "topicFooter top": {
        "fontSize": 11,
        "marginTop": 1,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 10,
        "color": "#E74C3C"
    },
    "topicFooter good": {
        "fontSize": 11,
        "marginTop": 1,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 10,
        "color": "#2ECC71"
    },
    "topicFooter tab": {
        "fontSize": 11,
        "marginTop": 1,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 10
    },
    "loading": {
        "marginTop": 250
    },
    footerErrorText: {
        fontSize: 20,
        textAlign: 'center',
        flex: 1
    },
    footerError: {
        height: 76,
        width: width,
        flexDirection: 'column'
    }
})

module.exports = TopicInfoListView;

