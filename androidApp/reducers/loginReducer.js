/**
 * Created by mars on 2015/11/20.*
 */

var types = require('../actions/actionTypes')

var initialState = {
    isLogin: false
}

export default function drawReducer(state = initialState, action={}) {
    switch (action.type) {
        case types.LOGIN:
            return {
                ...state,
                isDrawerOpen: true
            }
        case types.LOGOUT:
            return {
                ...state,
                isDrawerOpen: true
            }
        default :
            return state
    }
}