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

var ImageCircle=require('./ImageCircle');
var UserService=require('../services/UserService')

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
        this.state={
            isLogin:false,
            userData:null
        }
    }

    componentWillMount(){
        UserService.storage.getUser().then((data)=>{
            console.log(data)
           this.setState({
                isLogin:true,
                userData:data
               })
        })
    }

    _notLoginRender()
    {
        return(
            <View style={styles.userInfo}>
                <Image source={require("../../image/defaultUser.png")} style={styles.userAvatar}>
                </Image>
                <Text style={styles.text}>
                    点击头像登录
                </Text>
            </View>
        )
    }

    _loginRender()
    {
        const userData=this.state.userData
        return(
            <View style={styles.userInfo}>
                <Image source={{uri:userData.avatar_url}} style={styles.userAvatar}>
                </Image>
                <Text style={styles.text}>
                    {userData.loginname}
                </Text>
            </View>
        )
    }

    render()
    {
        if(this.state.isLogin)
        {
            return this._loginRender()
        }
        else{
            return this._notLoginRender()
        }
    }
}


module.exports=SimpleRow
