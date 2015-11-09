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
    } = React;

var ImageCircle=require('./ImageCircle')
var styles = StyleSheet.create({
    userInfo:{
        height:100
    },
    text:{
        fontSize: 15,
        color: '#888888',
        lineHeight: 20,
        marginBottom:15
    },
    avatar:{
        marginBottom:15
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
                <ImageCircle url='https://facebook.github.io/react/img/logo_og.png'
                             width={50} height={50} borderRadius={25}>
                </ImageCircle>
                <Text style={styles.text}>
                    点击头像登录
                </Text>
            </View>
        )
    }
}


module.exports=SimpleRow
