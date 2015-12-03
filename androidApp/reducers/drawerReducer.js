/**
 * Created by mars on 2015/10/14.
 */

var types = require('../actions/ActionTypes')

var initialState = {
    isDrawerOpen: false
}

export default function drawReducer(state = initialState, action={}) {
    switch (action.type) {
        case types.OPEN_DRAWER:
            return {
                ...state,
                isDrawerOpen: true
            }
        default :
            return state
    }
}