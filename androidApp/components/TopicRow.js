/**
 * Created by liujia on 2015/11/2.
 * 主题正文部件
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
    }
});

class TopicRow extends Component{
    constructor(props) {
        super(props);
    }
    render()
    {
        return (
            <TouchableHighlight >
                <View>
                    <View style={styles.row}>
                        <View style={styles.titleRow}>
                            <View style={styles.category}>
                                <Text style={styles.categoryText}>
                                    置顶
                                </Text>
                            </View>
                            <View style={styles.title}>
                                <Text style={styles.titleText}>
                                    CNode客户端专题
                                </Text>
                            </View>
                        </View>
                        <View style={styles.infoRow}>
                            <View style={styles.avatar}>
                                <ImageCircle url='https://facebook.github.io/react/img/logo_og.png'
                                             width={40} height={40} borderRadius={20}>
                                </ImageCircle>
                            </View>

                            <View style={styles.info}>
                                <View style={styles.author}>
                                    <Text style={styles.authorText}>
                                        alsotang
                                    </Text>
                                    <Text style={styles.countText}>
                                        64/11506
                                    </Text>
                                </View>
                                <View style={styles.author}>
                                    <Text style={styles.authorText}>
                                        创建于：2015-08-08 20:20:33
                                    </Text>
                                    <Text style={styles.countText}>
                                        1小时前
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