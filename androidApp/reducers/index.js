/**
 * Created by mars on 2015/10/14.
 */

import { combineReducers } from 'redux';
import configState from './configReducer'
import topicState from './topicReducer'
import userState from './userReducer.js'

const rootReducer = combineReducers({
    configState,topicState,userState
});

export default rootReducer;