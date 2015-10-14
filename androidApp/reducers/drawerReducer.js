/**
 * Created by mars on 2015/10/14.
 */

var types = require('../constants/ActionTypes')

var initialState = {
    isDrawerOpen: false
}

export default function drawReducer(state, action) {
    state = state || initialState;
    switch (action.type) {
        case types.OPEN_DRAWER:
            return {
                isDrawerOpen: true
            }
        default :
            return state
    }
}