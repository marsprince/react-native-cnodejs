/**
 * Created by liujia on 2015/12/7.
 */

var Storage = require('./Storage')
import intiConfig from "../configs/initConfig"
var storage = {}

storage.get = function () {
    return Storage.getItem('sss')
}

storage.save = function (value) {
    console.log(Storage.setItem('config', value))
    return Storage.setItem('config', value)
}

storage.remove = function () {
    return Storage.removeItem('config')
}

var req = {}

req.loadConfig=function() {
    return storage.get()
}

req.initConfig=function() {
    return storage.save(intiConfig)
}

req.removeConfig=function() {
    return storage.remove()
}

exports.configService = req