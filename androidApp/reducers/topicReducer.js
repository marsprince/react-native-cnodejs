/**
 * Created by liujia on 2015/12/8.
 */

var types = require('../actions/ActionTypes')

var initialState = {

}

export default function configReducer(state = initialState, action={}) {
    switch (action.type) {
        case types.UP_COMMENT_SUCCESS:
            const result=state
            result[action.replyId]=action.isUp
            return result
        default :
            return state
    }
}