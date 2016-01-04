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
            let index=state.upArray.length
            let temp={}
            temp[action.replyId]=action.isUp
            for(let i=0;i<state.upArray.length;i++)
            {
                if(Object.keys(state.upArray[i]).indexOf(action.replyId)!==-1) index=i
            }
            console.warn(index)
            return Object.assign({}, state, {
                upArray: [
                    ...state.upArray.slice(0, index),
                    temp,
                    ...state.upArray.slice(index + 1)
                ]
            });
        default :
            return state
    }
}