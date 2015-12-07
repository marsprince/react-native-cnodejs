/**
 * Created by mars on 2015/10/14.
 */

import { combineReducers } from 'redux';
import configState from './configReducer'

const rootReducer = combineReducers({
    configState
});

export default rootReducer;