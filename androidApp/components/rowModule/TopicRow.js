/**
 * Created by liujia on 2015/11/2.
 * 主题正文行
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

var ImageCircle=require('./../ImageCircle')
import {getCategory} from "../../util/cnodeUtil"

/*moment*/
import moment from "moment"
import zh_cn from "moment/locale/zh-cn.js"
moment.locale('zh-cn',zh_cn)

var styles = StyleSheet.create({
    row:{
        paddingLeft:10,
        paddingRight:10,
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
        flex:8,
        marginLeft:10,
    },
    categoryText:{
        fontSize: 14,
        marginTop:2,
        textAlign:'center',
    },
    titleText:{
        fontSize: 16,
        fontWeight: '500',
        textAlign:'left'
    },
    infoRow:{
        height:40,
        marginBottom:10,
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
        flex:3,
        fontSize: 14,
        color: '#888888',
        lineHeight: 20,
    },
    countText:{
        flex:1,
        fontSize: 14,
        color: '#888888',
        lineHeight: 20,
        textAlign:'right',
    }
});

class TopicRow extends Component{
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

        //var moment=require('moment');
        var {topic} =this.props;//https://cnodejs.org/api/v1/topics


        return (
            <TouchableHighlight  onPress={()=>{this._onPress(topic.id)}}>
                <View>
                    <View style={styles.row}>
                        <View style={styles.titleRow}>
                            <View style={[styles.category,{backgroundColor:((topic.top || topic.good)?"lightgreen":"lightgray")}]}>
                                <Text style={styles.categoryText}>
                                    {topic.top?"置顶":(topic.good?"精华":getCategory(topic.tab))}
                                </Text>
                            </View>
                            <View style={styles.title}>
                                <Text style={styles.titleText} numberOfLines={1}>
                                    {topic.title}
                                </Text>
                            </View>
                        </View>
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
                                    <Text style={styles.countText}>
                                        {topic.reply_count}/{topic.visit_count}
                                    </Text>
                                </View>
                                <View style={styles.author}>
                                    <Text style={styles.authorText}>
                                        创建于：{moment(topic.create_at).format('YYYY-MM-DD hh:mm:ss')}
                                    </Text>
                                    <Text style={styles.countText}>
                                        {moment(topic.last_reply_at).startOf('hour').fromNow()}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.separator} />
                </View>
            </TouchableHighlight>
        )
    }
}

module.exports=TopicRow