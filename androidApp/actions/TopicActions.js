var types = require('./ActionTypes')
var TopicService = require('../services/TopicService')


exports.getAllTopicsFromStorage = function () {
    return dispatch=> {
        TopicService.storage.getAll()
            .then(results=> {
                dispatch({
                    type: types.GET_ALL_TOPICS_FROM_STORAGE,
                    results: results
                })
            })
            .catch(err=> {

            })
            .done()
    }
}


exports.getTopicsByTab = function (topics, tab) {
    return {
        type: types.GET_TOPICS,
        topics: topics,
        tab: tab
    }
}


exports.updateTopicsByTab = function (topics, tab) {
    return {
        type: types.UPDATE_TOPICS,
        topics: topics,
        tab: tab
    }
}


exports.upComment=function upComment(replyId,token){
    return dispatch=>{
        TopicService.req.upComment(replyId,token)
            .then(results=> {
                dispatch({
                    type: types.UP_COMMENT_SUCCESS,
                    replyId:replyId,
                    isUp:results
                })
            })
            .catch(err=> {

            })
    }
}

exports.setUpSuccessFalse=function setCommentFalse(){
    return {
        type: types.UP_COMMENT_FAILED
    }
}

exports.reply=function reply(topicId, content, token, replyId)
{
    return dispatch=>{
        TopicService.req.reply(topicId, content, token, replyId)
            .then(results=> {
                dispatch
                ({
                    type: types.REPLY_SUCCESS,
                })
                dispatch
                ({
                    type: types.REPLY_SET_FALSE,
                })
            })
            .catch(err=> {

            })
    }
}

exports.publish=function publish(title, tab, content, token)
{
    return dispatch=>{
        TopicService.req.publish(title, tab, content, token)
            .then(results=> {
                dispatch
                ({
                    type: types.PUBLISH_SUCCESS,
                })
                dispatch
                ({
                    type: types.PUBLISH_SET_FALSE,
                })
            })
            .catch(err=> {
                console.warn(err)
            })
    }
}