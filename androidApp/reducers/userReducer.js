/**
 * Created by liujia on 2015/12/14.
 */

var types = require('../actions/ActionTypes')
var React = require('react-native')

var AsyncStorage = React.AsyncStorage

var initialState = {
    isLogin:false,
    userData:null,
    accesstoken:null
}

export default function userReducer(state = initialState, action={}) {
    switch (action.type) {
        case types.CHECK_TOKEN_SUCCESS:
            return {
                ...state,
                userData:action.userData,
                isLogin:true,
                accesstoken:actions.accesstoken
            }
        case types.CHECK_TOKEN_FAILED:
            return{
                ...state,
                isLogin:false,
                error:action.err
            }
        case types.LOAD_USER_SUCCESS:
            return {
                ...state,
                userData:action.results,
                isLogin:true
            }
        case types.LOAD_USER_FAILED:
            return{
                ...state,
                isLogin:false,
                err:null
            }
        case types.LOGOUT:
            return{
                isLogin:false,
                userData:null,
                err:null
            }
        default :
            return state
    }
}