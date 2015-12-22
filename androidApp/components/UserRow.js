/**
 * Created by mars on 2015/12/21.
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

var styles = StyleSheet.create({
    row:{
        paddingLeft:15,
        paddingRight:15,
        paddingTop:10,
        paddingBottom:10,
        backgroundColor: 'white',
        flexDirection:'row',
    },
    separator:{
        height: 1 / PixelRatio.get(),
        backgroundColor: '#bbbbbb',
    },
    avatar:{
        flex:1,
        alignItems:"center"
    },
    info:{
        flex:8,
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
        flex:1,
        fontSize: 14,
        color: '#888888',
        lineHeight: 20,
        textAlign:'right'
    },
    topicText:{
        flex:1,
        fontSize: 14,
        lineHeight: 20,
    },
});

class UserRow extends Component{
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
        const {topic} =this.props;

        return (
            <TouchableHighlight onPress={()=>{this._onPress(topic.id)}}>
                <View>
                    <View style={styles.row}>
                            <View style={styles.avatar}>
                                <ImageCircle url={topic.author.avatar_url.startsWith("http")?topic.author.avatar_url:"http:"+topic.author.avatar_url}
                                             width={40} height={40} borderRadius={20}>
                                </ImageCircle>
                            </View>

                            <View style={styles.info}>
                                <View style={styles.titleRow}>
                                        <Text style={styles.titleText} numberOfLines={1}>
                                            {topic.title}
                                        </Text>
                                </View>
                                <View style={{flex:1,flexDirection:'row'}}>
                                        <Text style={styles.authorText}>
                                            {topic.author.loginname}
                                        </Text>
                                        <Text style={styles.timeText}>
                                            {moment(topic.last_reply_at).startOf('hour').fromNow()}
                                        </Text>

                                </View>
                        </View>
                    </View>
                    <View style={styles.separator} />
                </View>
            </TouchableHighlight>
        )
    }
}

module.exports=UserRow