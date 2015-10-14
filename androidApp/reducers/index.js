/**
 * Created by mars on 2015/10/14.
 */

import { combineReducers } from 'redux';
import drawReducer from './drawerReducer.js';

const rootReducer = combineReducers({
    drawReducer
});

export default rootReducer;