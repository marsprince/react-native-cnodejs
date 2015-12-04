var types = require('./ActionTypes')
var UserService = require('../services/UserService')
var window = require('../util/window')

exports.openLoginModal = function openLoginModal() {
    return {
        type: types.OPEN_LOGIN_MODAL,
        isModalOpen: true
    }
}

exports.closeLoginModal = function closeLoginModal() {
    return {
        type: types.CLOSE_LOGIN_MODAL,
        isModalOpen: false
    }
}

exports.loadConfig=function loadConfig(){
    return {
        type: types.LOAD_CONFIG,
    }
}



