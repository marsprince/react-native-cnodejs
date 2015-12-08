/**
 * Created by liujia on 2015/12/7.
 */
var Storage = require('./Storage')
import initConfig from "../configs/initConfig"
import {STORAGE_KEY_CONFIG} from "../configs/Constants"

var storage = {}

storage.get = function () {
    return Storage.getItem(STORAGE_KEY_CONFIG)
}

storage.save = function (value) {
    return Storage.setItem(STORAGE_KEY_CONFIG, value)
}

storage.remove = function () {
    return Storage.removeItem(STORAGE_KEY_CONFIG)
}

var req = {}

req.loadConfig=function() {
    return storage.get()
}

req.initConfig=function() {
    return storage.get().then(
        value=>{
            if(!value) {
                storage.save(initConfig)
                return storage.get()
            }
        }
    )

}

req.restoreConfig=function(){
    storage.save(initConfig)
    return storage.get()
}

req.setConfig=function(valee){
    storage.save(valee)
    return storage.get()
}

req.removeConfig=function() {
    return storage.remove()
}

exports.configService = req