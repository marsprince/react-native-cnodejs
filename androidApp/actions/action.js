/**
 * Created by mars on 2015/10/13.
 */

var types = require('../constants/ActionTypes')

exports.openDrawer = function openDrawerModal() {
    return {
        type: types.OPEN_DRAWER,
        isDrawerOpen: true
    }
}