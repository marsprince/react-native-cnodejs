/**
 * Created by mars on 2015/11/6.
 */

'use strict';

import React, {
    Component,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
    TouchableOpacity,
    }
    from 'react-native';

import { connect } from '../../node_modules/react-redux/native';
import { getLoginUserFromStorage } from '../actions/UserActions.js';
import {alertLogout} from './alertModule/alertLogout'
import BasicButton from './buttonModule/BasicButton.js'
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
        this.props.actions.loadUserId()
        this.props.actions.loadAccessToken()
    }

    _login(){
        this.props.router.toLogin()
    }

    _notLoginRender()
    {
        return(
            <View style={styles.userInfo}>
                <TouchableOpacity activeOpacity={1} onPress={this._login.bind(this)} style={{flex:1}}>
                    <Image source={require("../../image/defaultUser.png")} style={styles.userAvatar}>
                    </Image>
                </TouchableOpacity>

                <Text style={styles.textUnLogin}>
                    点击头像登录
                </Text>
            </View>
        )
    }
    _logout(){
        alertLogout(this.props.actions)
    }

    _userInfo(){
        this.props.router.toUser({
            loginname:this.props.state.userState.userData.loginname
        })
    }

    _loginRender()
    {
        const userData=this.props.state.userState.userData
        return(
            <View style={styles.userInfo}>
                <TouchableOpacity activeOpacity={1} onPress={this._userInfo.bind(this)} style={{flex:1}}>
                    <Image source={{uri:userData.avatar_url}} style={styles.userAvatar}>
                    </Image>
                </TouchableOpacity>
                <View style={{flex:1,flexDirection:'row'}}>
                    <View style={{flex:3}}>
                        <Text style={styles.textLogin}>
                            {userData.loginname}
                        </Text>
                        <Text style={styles.textLogin}>
                            积分：{userData.score}
                        </Text>
                    </View>
                    <View style={{flex:1,alignItems:'center',paddingBottom:10}}>
                        <BasicButton onPress={this._logout.bind(this)} value="注销"></BasicButton>
                    </View>
                </View>
            </View>
        )
    }

    render()
    {
        const userState=this.props.state.userState
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
