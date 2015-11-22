/**
 * Created by mars on 2015/11/6.
 * 显示头像和个人信息
 */

'use strict';

var React = require('react-native');
var {
    Component,
    StyleSheet,
    Text,
    View,
    Image
    } = React;

var ImageCircle=require('./ImageCircle')
var styles = StyleSheet.create({
    userInfo:{
        height:150,
        backgroundColor:'pink'
    },
    text:{
        fontSize: 15,
        color: '#888888',
        lineHeight: 20,
        marginTop:20,
        marginLeft:10,
    },
    image:{
        flex:1,
    },
    userAvatar:{
        marginTop:10,
        marginLeft:10,
        width:80,
        height:80,
        borderRadius:40
    }
});

class SimpleRow extends Component{
    constructor(props) {
        super(props);
    }
    render()
    {
        var {text,onPress}=this.props;
        return (
            <View style={styles.userInfo}>
                <Image source={require("../../image/defaultUser.png")} style={styles.userAvatar}>
                </Image>
                    <Text style={styles.text}>
                        点击头像登录
                    </Text>
            </View>
        )
    }
}


module.exports=SimpleRow
