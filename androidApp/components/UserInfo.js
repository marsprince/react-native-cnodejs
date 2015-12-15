/**
 * Created by mars on 2015/11/6.
 * 显示头像和个人信息
 */

'use strict';

import React, {
    Component,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight
    }
    from 'react-native';

var ImageCircle=require('./ImageCircle');
var UserActions=require('../actions/UserActions')

import { connect } from '../../node_modules/react-redux/native';
import { getLoginUserFromStorage } from '../actions/UserActions.js';
import {Button} from 'mrn'

var styles = StyleSheet.create({
    userInfo:{
        backgroundColor:'pink'
    },
    textUnLogin:{
        fontSize: 14,
        color: '#888888',
        lineHeight: 20,
        marginLeft:10,
        justifyContent:'center'
    },
    textLogin:{
        fontSize: 14,
        color: '#888888',
        lineHeight: 20,
        marginLeft:15,
        justifyContent:'center'
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

class UserInfo extends Component{
    constructor(props) {
        super(props);
    }

    componentDidMount(){
       this.props.actions.loadUser()
    }

    _login(){
        this.props.router.toLogin()
    }

    _notLoginRender()
    {
        return(
            <View style={styles.userInfo}>
                <TouchableHighlight activeOpacity={0} onPress={this._login.bind(this)} style={{flex:1}}>
                    <Image source={require("../../image/defaultUser.png")} style={styles.userAvatar}>
                    </Image>
                </TouchableHighlight>

                <Text style={styles.textUnLogin}>
                    点击头像登录
                </Text>
            </View>
        )
    }
    _logout(){
        this.props.actions.logout()
    }

    _loginRender()
    {
        const userData=this.props.state.userState.userData
        return(
            <View style={styles.userInfo}>
                <Image source={{uri:userData.avatar_url}} style={styles.userAvatar}>
                </Image>
                <View style={{flex:1,flexDirection:'row'}}>
                    <View style={{flex:3}}>
                        <Text style={styles.textLogin}>
                            {userData.loginname}
                        </Text>
                        <Text style={styles.textLogin}>
                            积分：{userData.score}
                        </Text>
                    </View>
                    <View style={{flex:1}}>
                        <Button value="注销" primary={'googleBlue'}  onPress={this._logout.bind(this)}/>
                    </View>
                </View>
            </View>
        )
    }

    render()
    {
        const userState=this.props.state.userState
        console.log(userState)
        if(userState.isLogin)
        {
            return this._loginRender()
        }
        else{
            return this._notLoginRender()
        }
    }
}

module.exports=UserInfo
