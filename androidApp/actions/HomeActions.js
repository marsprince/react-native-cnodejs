var types = require('./ActionTypes')
var UserService = require('../services/UserService')
var window = require('../util/window')
import {configService} from "../services/ConfigService"

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

exports.setConfig=function setConfig(value){
    return dispatch=> {
        configService.setConfig(value)
            .then(results=> {
                dispatch({
                    type: types.SET_CONFIG_SUCCESS,
                    results: results
                })
            })
            .catch(err=> {

            })
            .done()
    }
}

exports.restoreConfig=function restoreConfig(value){
    return dispatch=> {
        configService.restoreConfig()
            .then(results=> {
                dispatch({
                    type: types.RESTORE_CONFIG_SUCCESS,
                    results: results
                })
            })
            .catch(err=> {

            })
            .done()
    }
}



