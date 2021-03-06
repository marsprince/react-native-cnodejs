/**
 * Created by liujia on 2015/12/8.
 */

var types = require('../actions/ActionTypes')

var initialState = {
   upSuccess:false,
   replySuccess:false,
   publishSuccess:false
}

export default function configReducer(state = initialState, action={}) {
    switch (action.type) {
        case types.UP_COMMENT_SUCCESS:
           return {
               ...state,
               upSuccess:true
           }
        case types.UP_COMMENT_FAILED:
            return {
                ...state,
                upSuccess:false
            }
        case types.REPLY_SUCCESS:
            return {
                ...state,
                replySuccess:true
            }
        case types.REPLY_SET_FALSE:
            return {
                ...state,
                replySuccess:false
            }
        case types.PUBLISH_SUCCESS:
            return {
                ...state,
                publishSuccess:true
            }
        case types.PUBLISH_SET_FALSE:
            return {
                ...state,
                publishSuccess:false
            }
        default :
            return state
    }
}