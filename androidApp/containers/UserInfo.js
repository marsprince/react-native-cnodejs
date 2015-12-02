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

var ImageCircle=require('./../components/ImageCircle');
var UserActions=require('../actions/UserActions')

import { connect } from 'react-redux/native';
import { getLoginUserFromStorage } from '../actions/UserActions.js';

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

class UserInfo extends Component{
    constructor(props) {
        super(props);
        this.state={
            isLogin:false,
            userData:null
        }
    }

    componentWDidMount(){
        console.log( this.props.getLoginUserFromStorage)
        this.props.getLoginUserFromStorage.then((data)=>{
            console.log(data)
           this.setState({
                isLogin:true,
                userData:data
               })
        })
    }

    _login(){
        this.props.router.toBarCode()
    }

    _notLoginRender()
    {
        return(
            <View style={styles.userInfo}>
                <TouchableHighlight activeOpacity={0} onPress={this._login.bind(this)} style={{flex:1}}>
                    <Image source={require("../../image/defaultUser.png")} style={styles.userAvatar}>
                    </Image>
                </TouchableHighlight>

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
                <Text style={[styles.text,{textAlign:'right'}]}>
                    注销
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

function mapStateToProps(state) {
    return {
        user: state.user
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getLoginUserFromStorage: () => dispatch(getLoginUserFromStorage())
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserInfo);

