/**
 * Created by mars on 2015/10/13.
 */

var types = require('./actionTypes')

export function openDrawer() {

    return {
        type: types.OPEN_DRAWER,
        isDrawerOpen: true
    }
}