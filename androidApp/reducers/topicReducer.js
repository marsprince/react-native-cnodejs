/**
 * Created by liujia on 2015/12/8.
 */

var types = require('../actions/ActionTypes')

var initialState = {
   upSuccess:false
}

export default function configReducer(state = initialState, action={}) {
    switch (action.type) {
        case types.UP_COMMENT_SUCCESS:
            console.warn('iiiin')
           return {
               ...state,
               upSuccess:true
           }
        case types.UP_COMMENT_FAILED:
            return {
                ...state,
                upSuccess:false
            }
        default :
            return state
    }
}