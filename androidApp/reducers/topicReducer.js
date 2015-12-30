/**
 * Created by liujia on 2015/12/8.
 */

var types = require('../actions/ActionTypes')

var initialState = {
    upArray:[]  //[{id:isUp},{}]
}

export default function configReducer(state = initialState, action={}) {
    switch (action.type) {
        case types.UP_COMMENT_SUCCESS:
            let temp={}
            temp[action.replyId]=action.isUp

            return Object.assign({}, state, {
                upArray: [
                    ...state.upArray.slice(0, action.index),
                    Object.assign({}, state.upArray[action.index], temp),
                    ...state.upArray.slice(action.index + 1)
                ]
            });
        default :
            return state
    }
}