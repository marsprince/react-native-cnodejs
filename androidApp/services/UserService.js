var Storage = require('./Storage')
var config = require('../configs/config')
var request = require('./Request')

var storage = {}


storage.clearUserInfo = function () {
    return Storage.removeItem('userInfo')
}

storage.saveUserInfo = function (userInfo) {
    return Storage.setItem('userInfo', userInfo)
}

storage.getUserInfo = function () {
    return Storage.getItem('userInfo')
}

storage.getUserAndUserInfo = function () {
    return Promise.all([
        storage.getUser(),
        storage.getUserInfo()
    ])
        .then(results=> {
            return {
                user: results[0],
                userInfo: results[1]
            }
        })
}

var req = {}

req.loadUser=function() {
    return storage.getUserInfo()
}

req.getLoginUserInfo = function (user) {
    var apiUrl = config.domain + config.apiPath

    return request.get(apiUrl + '/user/' + user.loginname)
        .then((data)=>data.data)
        .then(userInfo=> {
            if (userInfo) {
                Storage.setItem('userInfo', userInfo)
                return userInfo
            }
            return Storage.getItem('userInfo')
        })
}


req.getUserInfo = function (userName) {
    var apiUrl = config.domain + config.apiPath

    return request.get(apiUrl + '/user/' + userName)
        .then(data=> {
            if (data.error_msg) {
                throw 'UserNotExist'
            }
            return data
        })
        .then((data)=>data.data)
}



req.checkToken = function (token) {
    var apiUrl = config.domain + config.apiPath + '/accesstoken'
    return request.post(apiUrl, {
        accesstoken: token
    })
        .then(data => {
            if (data.success) {
                data.token = token
                Storage.setItem('user', data)
                return data
            }
            throw 'wrong token'
        })
}

exports.storage = storage
exports.req = req
