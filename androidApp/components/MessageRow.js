/**
 * Created by liujia on 2015/12/17.
 */

'use strict';

var React = require('react-native');
var {
    Component,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    TouchableOpacity,
    PixelRatio,
    Image
    } = React;

var ImageCircle=require('./ImageCircle')
import {getCategory} from "../util/cnodeUtil"
import CommentHtml from "./htmlRender/CommentHtml"
/*moment*/
import moment from "moment"
import zh_cn from "moment/locale/zh-cn.js"
moment.locale('zh-cn',zh_cn)

var styles = StyleSheet.create({
    row:{
        paddingLeft:15,
        paddingRight:15,
        paddingTop:10,
        backgroundColor: 'white',
        flexDirection:'row',
    },
    separator:{
        height: 1 / PixelRatio.get(),
        backgroundColor: '#bbbbbb',
    },
    categoryText:{
        fontSize: 14,
        textAlign:'center',
    },
    avatar:{
        flex:1,
        alignItems:"center"
    },
    info:{
        flex:8,
        marginBottom:10,
        marginLeft:10
    },
    author:{
        flexDirection:'row',
    },
    authorText:{
        flex:1,
        fontSize: 14,
        color: '#888888',
        lineHeight: 20,
    },
    timeText:{
        flex:2,
        fontSize: 14,
        color: '#888888',
        lineHeight: 20,
    },
    topicText:{
        flex:1,
        fontSize: 14,
        lineHeight: 20,
    },
    webView:{
        paddingLeft:15,
        paddingRight:15,
        flex:1
    },
    topic:{
        marginLeft:15,
        marginRight:15,
        marginBottom:15,
        paddingTop:10,
        paddingBottom:10,
        paddingRight:10,
        paddingLeft:10,
        backgroundColor: 'lightgray',
    }
});

class MessageRow extends Component{
    constructor(props) {
        super(props);
    }
    _onPress(id)
    {
        this.props.router.toTopicInfoListView({
            id:id
        })
    }
    render()
    {
        var {message} =this.props;
        return (
            <View>
                <View style={styles.row}>
                        <View style={styles.avatar}>
                            <ImageCircle url={message.author.avatar_url.startsWith("http")?message.author.avatar_url:"http:"+message.author.avatar_url}
                                         width={40} height={40} borderRadius={20}>
                            </ImageCircle>
                        </View>

                        <View style={styles.info}>
                            <View style={styles.author}>
                                <Text style={styles.authorText}>
                                    {message.author.loginname}
                                </Text>
                                <Text style={[styles.authorText,{textAlign:'right'}]}>
                                    {moment(message.reply.create_at).startOf('hour').fromNow()}
                                </Text>
                            </View>
                            <View style={styles.author}>
                                <Text style={styles.timeText}>
                                    在回复中@了您
                                </Text>
                            </View>
                        </View>
                </View>
                <View style={styles.webView}>
                    <CommentHtml content={message.reply.content} router={this.props.router}>

                    </CommentHtml>
                </View>
                <TouchableOpacity activeOpacity={1} style={styles.topic} onPress={this._onPress.bind(this,message.topic.id)}>
                    <Text style={styles.topicText}>
                        {message.topic.title}
                    </Text>
                </TouchableOpacity>
                <View style={styles.separator} />
            </View>
        )
    }
}

module.exports=MessageRow