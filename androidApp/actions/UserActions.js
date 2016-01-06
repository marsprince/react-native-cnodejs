var types = require('./ActionTypes')
var UserService = require('../services/UserService')
var TopicService = require('../services/TopicService')
var MessageService = require('../services/MessageService')
var Storage = require('../services/Storage')
import {alertDialog} from '../components/alertModule/alert'
import React,{DeviceEventEmitter} from "react-native"

function getUser(user) {
    return {
        type: types.GET_USER,
        user: user
    }
}

exports.getLoginUserFromStorage = function () {
    return dispatch=> {
        var userTemp = {}
        UserService.storage.getUser()
            .then((user)=> {
                // console.log('haveLoadedUser');
                if (user) {
                    dispatch(getUser(user))
                    userTemp = user
                    return UserService.req.getLoginUserInfo(user)
                }
                else {
                    throw 'GET_LOGIN_USER_FROM_STORAGE_FAILED'
                }

            })
            .then(userFetched=> {
                // console.log('fetchUser');
                if (userFetched) {
                    var userUpdated = Object.assign(userTemp, userFetched)
                    UserService.storage.saveUser(userUpdated)
                    dispatch(getUser(userTemp))
                }
            })
            .catch((err)=> {
                console.warn(err)
            })
            .done()
    }
}


exports.fetchUser = function fetchUser(user) {
    return dispatch => {
        UserService.req.getLoginUserInfo(user)
            .then(userInfo=> {
                if (userInfo) {
                    Object.assign(user, userInfo)
                    UserService.storage.saveUser(user)
                    dispatch(getUser(user))
                }
            })
            .catch(err=> {
                console.warn(err)
            })
            .done()
    }
}


exports.checkToken = function (token) {
    return dispatch=> {
        UserService.req.checkToken(token)
            .then(user=> {
                return UserService.req.getLoginUserInfo(user)
            })
            .then((userInfo)=> {
                if (userInfo) {
                   // dispatch(getUser(userInfo))
                    dispatch({
                        type: types.CHECK_TOKEN_SUCCESS,
                        userData:userInfo,
                        accesstoken:token
                    })
                }
                else {
                    throw 'CHECK_TOKEN_FAILED'
                }
            })
            .catch(function (err) {
                dispatch({
                    type: types.CHECK_TOKEN_FAILED,
                    err: err
                })
            })
            .done()
    }
}


exports.likeTopic = function (topic) {
    return {
        type: types.LIKE_TOPIC,
        topic: {
            id: topic.id,
            author: topic.author,
            title: topic.title,
            last_reply_at: topic.last_reply_at
        }
    }
}


exports.unLikeTopic = function (id) {
    return {
        type: types.UN_LIKE_TOPIC,
        id: id
    }
}


exports.logout = function () {
    UserService.storage.logout()
    return {
        type: types.LOGOUT
    }
}


exports.clear = function () {
    TopicService.storage.remove()
    MessageService.storage.remove()
    return {
        type: types.CLEAR
    }
}

exports.loadAccessToken=function(){
    return dispatch=>{
        UserService.req.loadToken()
        .then(results=>{
                dispatch({
                    type: types.LOAD_TOKEN_SUCCESS,
                    accesstoken:results
                })
            })
        .catch(err=>{

            })
        .done()
    }
}

exports.loadUserId=function(){
    return dispatch=>{
        UserService.req.loadUserId()
            .then(results=>{
                dispatch({
                    type: types.LOAD_USERID_SUCCESS,
                    userId:results
                })
            })
            .catch(err=>{

            })
            .done()
    }
}

exports.loadUser=function loadUser(){
    return dispatch=> {
        UserService.req.loadUser()
            .then(results=> {
                if(results)
                {
                    dispatch({
                        type: types.LOAD_USER_SUCCESS,
                        results: results
                    })
                }
                else{
                    dispatch({
                        type: types.LOAD_USER_FAILED,
                        results: results
                    })
                }

            })
            .catch(err=> {

            })
            .done()
    }
}

exports.openLoginModal=function openLoginModal(route){
    alertDialog()
    DeviceEventEmitter.addListener('positiveButtonClick', function(e: Event) {
       route.toLogin()
    });
}
