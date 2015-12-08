/**
 * Created by liujia on 2015/12/8.
 */

var types = require('../actions/ActionTypes')

var initialState = {

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
        case types.SET_CONFIG_SUCCESS:
            return {
                ...state,
                config:action.results
            }
        case types.RESTORE_CONFIG_SUCCESS:
            return {
                ...state,
                config:action.results
            }
        default :
            return state
    }
}