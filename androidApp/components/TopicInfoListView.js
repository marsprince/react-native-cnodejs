/**
 * Created by mars on 2015/11/16.
 * ÿ�����ӵ������б�
 */

var React = require('react-native')
var moment = require('moment')

var TopicService = require('../services/TopicService')
var TopicInfoRow = require('./TopicInfoRow');
var ReplyRow=require('./ReplyRow')

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
    TouchableHighlight
    } = React

var NavigationTitleBar=require("./NavigationTitleBar");
var TopicInfoRow=require("./TopicInfoRow")
var mocks=require('../mocks/topic')

class TopicInfoListView extends Component {
    constructor(porps) {
        super(porps)
        var replyDs = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
        this.state = {
            replyDs: replyDs,
            topicDs:null,
            isLoading: false,
            loadingPosition: 'top',
            getTopicError: null
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
        this._genRows();
    }

    _renderRow(reply, sectionId, rowId, highlightRow) {
        return (
            <ReplyRow
                //ref={view => this.listRows[rowId.toString()]=view}
                reply={reply}
                row={rowId}
                router={this.props.router}
                >
            </ReplyRow>
        )
    }

    render() {
        var topicAll=this.state.topicDs;
        if (!topicAll) {
            return (
                <View style={styles.container}>
                   <Text>wait...</Text>
                </View>
            )
        }
        return (
            <View>
               <NavigationTitleBar>
               </NavigationTitleBar>
                <TopicInfoRow topic={topicAll}>
                </TopicInfoRow>
                <ListView
                    ref={view => {this._listView = view}}
                    style={{backgroundColor:'rgba(255,255,255,1)'}}
                    //onScroll={()=>onScroll()}
                    showsVerticalScrollIndicator={true}
                    initialListSize={10}
                    pagingEnabled={false}
                    dataSource={this.state.replyDs}
                    renderRow={this._renderRow.bind(this)}
                    />
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
