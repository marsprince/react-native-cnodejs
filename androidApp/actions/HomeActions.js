var types = require('./ActionTypes')
var UserService = require('../services/UserService')
var window = require('../util/window')
import {configService} from "../services/ConfigService"

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
    return dispatch=> {
        configService.loadConfig()
            .then(results=> {
                dispatch({
                    type: types.LOAD_CONFIG_SUCCESS,
                    results: results
                })
            })
            .catch(err=> {

            })
            .done()
    }
}

exports.initConfig=function initConfig(){
    return dispatch=> {
        configService.initConfig()
            .then(results=> {
                console.log(results)
                dispatch({
                    type: types.INIT_CONFIG_SUCCESS,
                    results: results
                })
            })
            .catch(err=> {

            })
            .done()
    }
}



