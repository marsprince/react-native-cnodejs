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
    TouchableOpacity,
    Image
    } = React;

var ImageCircle=require('./ImageCircle')
var styles = StyleSheet.create({
    row:{
        height:100,
        flex:1
    },
    text:{

    },
    separator:{

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
        marginBottom:8
    },
    title:{
        flex:8,
        marginBottom:10,
        marginLeft:10

    },
    categoryText:{
        fontSize: 14,
        textAlign:'center',
    },
    titleText:{
        fontSize: 16,
        fontWeight: '500',
        textAlign:'left'
    }
});

class TopicRow extends Component{
    constructor(props) {
        super(props);
    }
    render()
    {
        return (
            <TouchableOpacity >
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
                            <ImageCircle style={styles.avatar}>
                            </ImageCircle>
                            <View style={styles.info}>
                                <View style={styles.author}>
                                </View>
                                <View style={styles.time}>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.separator} />
                </View>
            </TouchableOpacity>
        )
    }
}

module.exports=TopicRow