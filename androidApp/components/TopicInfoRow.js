/**
 * Created by mars on 2015/11/16.
 * 主题详细信息的楼主部分
 */

'use strict';

var React = require('react-native');
var {
    Component,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    PixelRatio,
    Image
    } = React;

var ImageCircle=require('./ImageCircle')
import {getCategory} from "../util/cnodeUtil"

/*moment*/
import moment from "moment"
import zh_cn from "moment/locale/zh-cn.js"
moment.locale('zh-cn',zh_cn)

import CommentHtml from "./htmlRender/CommentHtml.js"

var styles = StyleSheet.create({
    row:{
        paddingLeft:15,
        paddingRight:15,
        flex:1,
        backgroundColor: 'white',
    },
    separator:{
        height: 1 / PixelRatio.get(),
        backgroundColor: '#bbbbbb',
    },
    titleRow:{
        flex:1,
        marginTop:10,
        flexDirection:'row',
    },
    category:{
        flex:1,
        borderRadius:10,
        marginBottom:5
    },
    title:{
        flex:1,
        paddingTop:15,
        paddingLeft:15,
        marginBottom:10
    },
    categoryText:{
        fontSize: 14,
        textAlign:'center',
    },
    titleText:{
        fontSize: 16,
        fontWeight: '500',
        textAlign:'left'
    },
    infoRow:{
        height:40,
        marginBottom:5,
        flexDirection:'row',
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
        flex:7,
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
    countText:{
        flex:1,
        fontSize: 14,
        color: 'lightgreen',
        lineHeight: 20,
        textAlign:'right',
    },
    webView:{
        paddingLeft:15,
        paddingRight:15,
        flex:1
    }
});

class TopicInfoRow extends Component{
    constructor(props) {
        super(props);
    }
    render()
    {
        var {topic} =this.props;//https://cnodejs.org/api/v1/topics
        return (
            <View>
                <View style={styles.title}>
                    <Text style={styles.titleText}>
                        {topic.title}
                    </Text>
                </View>
                <View style={styles.row}>
                    <View style={styles.infoRow}>
                        <View style={styles.avatar}>
                            <ImageCircle url={topic.author.avatar_url.startsWith("http")?topic.author.avatar_url:"http:"+topic.author.avatar_url}
                                             width={40} height={40} borderRadius={20}>
                            </ImageCircle>
                        </View>

                        <View style={styles.info}>
                            <View style={styles.author}>
                                <Text style={styles.authorText}>
                                    {topic.author.loginname}
                                </Text>
                                <View style={[styles.category,{backgroundColor:((topic.top || topic.good)?"lightgreen":"lightgray")}]}>
                                    <Text style={styles.categoryText}>
                                        {topic.top?"置顶":(topic.good?"精华":getCategory(topic.tab))}
                                    </Text>
                                </View>
                            </View>
                           <View style={styles.author}>
                               <Text style={styles.timeText}>
                                   发布于:{moment(topic.create_at).startOf('hour').fromNow()}
                               </Text>
                               <Text style={styles.countText}>
                                   {topic.visit_count}次浏览
                               </Text>
                           </View>
                        </View>
                    </View>
                </View>
                <View style={styles.webView}>
                    <CommentHtml content={topic.content} router={this.props.router}>

                    </CommentHtml>
                </View>
                <View style={styles.separator} />
            </View>
        )
    }
}

module.exports=TopicInfoRow