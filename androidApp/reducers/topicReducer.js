/**
 * Created by liujia on 2015/12/8.
 */

var types = require('../actions/ActionTypes')

var initialState = {
    upArray:[]
}

export default function configReducer(state = initialState, action={}) {
    switch (action.type) {
        case types.UP_COMMENT_SUCCESS:
            return {
                ...state,
            }
        default :
            return state
    }
}