/**
 * Created by liujia on 2015/11/2.
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

import CommentHtml from "./htmlRender/CommentHtml.js"
var Icon=require("react-native-vector-icons/MaterialIcons")

/*moment*/
import moment from "moment"
import zh_cn from "moment/locale/zh-cn.js"
moment.locale('zh-cn',zh_cn)

var styles = StyleSheet.create({
    row:{
        paddingLeft:15,
        paddingRight:15,
        marginTop:10,
        flex:1,
        backgroundColor: 'white',
        flexDirection:'row',
    },
    separator:{
        height: 1 / PixelRatio.get(),
        backgroundColor: '#bbbbbb',
    },
    titleText:{
        fontSize: 16,
        fontWeight: '500',
        textAlign:'left'
    },
    info:{
        flex:6,
        paddingLeft:10
    },
    avatar:{
        flex:1,
    },
    action:{
        flex:2,
        flexDirection:'row',
    },
    authorText:{
        flex:3,
        fontSize: 14,
        color: '#888888',
        lineHeight: 20,
    },
    countText:{
        flex:3,
        fontSize: 14,
        color: '#888888',
        lineHeight: 20,
    },
    agreeText:{
        textAlign :'center',
        fontSize: 20,
        color: '#888888',
        lineHeight:26,
    },
    webView:{
        paddingLeft:15,
        paddingRight:15,
        flex:1
    }
});

class CommentRow extends Component{
    constructor(props) {
        super(props);
    }
    _upPress(){

    }
    render()
    {
        var {reply,row} =this.props;//https://cnodejs.org/api/v1/topics
        return (
            <View style={{flex:1}}>
                <View style={styles.row}>
                    <View style={styles.avatar}>
                        <ImageCircle url={reply.author.avatar_url.startsWith("http")?reply.author.avatar_url:"http:"+reply.author.avatar_url}
                                     width={40} height={40} borderRadius={20}>
                        </ImageCircle>
                    </View>

                    <View style={styles.info}>
                        <View style={{flex:1}}>
                            <Text style={styles.authorText}>
                                {reply.author.loginname}
                            </Text>
                            <Text style={styles.authorText}>
                                {row}楼 {moment(reply.create_at).startOf('hour').fromNow()}
                            </Text>
                        </View>
                    </View>

                    <View style={styles.action}>
                        <TouchableHighlight activeOpacity={1} underlayColor='lightgray' style={{flex:1}} onPress={this._upPress.bind(this)}>
                            <View style={{flex:1,flexDirection:'row'}}>
                                <Icon name="thumb-up" size={25} color="#000000" style={{flex:1}}/>
                                <Text style={[styles.agreeText,{flex:1}]}>
                                    {reply.ups.length}
                                </Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight activeOpacity={0} underlayColor='lightgray' style={{flex:1}} onPress={null}>
                            <View style={{flex:1,flexDirection:'row'}}>
                                <Icon name="reply" size={25} color="#000000" style={{flex:1}}/>
                            </View>
                        </TouchableHighlight>
                    </View>
                </View>
                <View style={styles.webView}>
                    <CommentHtml content={reply.content} router={this.props.router}>

                    </CommentHtml>
                </View>
                <View style={styles.separator} />
            </View>
        )
    }
}

module.exports=CommentRow