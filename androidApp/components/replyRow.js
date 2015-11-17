/**
 * Created by liujia on 2015/11/2.
 * 主题详细信息的回复部分
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

var styles = StyleSheet.create({
    row:{
        height:90,
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
        height:30,
        marginTop:10,
        flexDirection:'row',
    },
    category:{
        flex:1,
        backgroundColor:'lightgreen',
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
    },
    webView:{

    }
});

class ReplyRow extends Component{
    constructor(props) {
        super(props);
    }
    render()
    {
        var moment=require('moment');
        var {reply,row} =this.props;//https://cnodejs.org/api/v1/topics
        //moment.locale('zh-cn')
        return (
            <View>
                <View>
                    <View style={styles.row}>
                        <View style={styles.infoRow}>
                            <View style={styles.avatar}>
                                <ImageCircle url={reply.author.avatar_url.startsWith("http")?reply.author.avatar_url:"http:"+reply.author.avatar_url}
                                             width={40} height={40} borderRadius={20}>
                                </ImageCircle>
                            </View>

                            <View style={styles.info}>
                                <View style={styles.author}>
                                    <Text style={styles.authorText}>
                                        {reply.author.loginname}
                                    </Text>
                                    <Text style={styles.countText}>
                                        {reply.ups.length}人点赞
                                    </Text>
                                </View>
                                <View style={styles.author}>
                                    <Text style={styles.countText}>
                                        {row}楼
                                    </Text>
                                    <Text style={styles.authorText}>
                                        {moment(reply.create_at).format('YYYY-MM-DD hh:mm:ss')}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.webView}>
                        <Text style={styles.authorText}>
                            this is webview
                        </Text>
                    </View>
                    <View style={styles.separator} />
                </View>
            </View>
        )
    }
}

module.exports=ReplyRow