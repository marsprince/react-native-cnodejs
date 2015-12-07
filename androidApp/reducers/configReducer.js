/**
 * Created by liujia on 2015/12/7.
 */

var types = require('../actions/ActionTypes')

var initialState = {
    initComplete: false
}

export default function configReducer(state = initialState, action={}) {
    switch (action.type) {
        case types.LOAD_CONFIG_SUCCESS:
            return {
                ...state,
                config:action.results
            }

        case types.INIT_CONFIG_SUCCESS:
            return {
                ...state,
                config:action.results,
                initComplete:true
            }
        default :
            return state
    }
}