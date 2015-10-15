/**
 * Created by mars on 2015/10/14.
 */

import { combineReducers } from 'redux';
import drawerState from './drawerReducer.js';

const rootReducer = combineReducers({
    drawerState
});

export default rootReducer;