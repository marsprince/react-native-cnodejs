var React = require('react-native')

// Components
//var User = require('../containers/User')
//var Topic = require('../containers/Topic')
//var Comments = require('../containers/Comments')
var Message = require('../containers/Message')
var About = require('../containers/About')
//var Publish = require('../containers/Publish')
var BarCode=require('../containers/BarCode')
var TopicInfoListView=require('../containers/TopicInfoListView')
// Config
import {customFloatFromRight,basePushFromRight} from  './sceneConfig'
var WriteTopic =require('../containers/WriteTopic')
var Settings=require('../containers/Settings')
var Login=require('../containers/Login')
import User from '../containers/User'

var {
    Navigator
    } = React

class Router {
    constructor(navigator) {
        this.navigator = navigator
        this.length=this.navigator.getCurrentRoutes().length
    }

    push(props, route) {
        let routesList = this.navigator.getCurrentRoutes()
        let nextIndex = routesList[routesList.length - 1].index + 1
        route.props = props
        route.index = nextIndex
        this.navigator.push(route)
    }


    pop() {
        this.navigator.pop()
    }

    popToTop()
    {
        this.navigator.popToTop()
    }


    toUser(props) {
        this.push(props, {
            component: User,
            name: 'user',
            sceneConfig: customFloatFromRight
        })
    }

    toTopicInfoListView(props) {
        this.push(props, {
            component: TopicInfoListView,
            name: 'topic',
            sceneConfig: customFloatFromRight
        })
    }

    toBarCode(props)
    {
        this.push(props, {
            component: BarCode,
            name: 'barCode',
            sceneConfig: customFloatFromRight
        })
    }

    toAbout() {
        this.push({}, {
            component: About,
            name: 'about',
            sceneConfig: customFloatFromRight
        })
    }

    toComments(props) {
        this.push(props, {
            component: Comments,
            name: 'comments',
            sceneConfig: customFloatFromRight
        })
    }

    toMessage(props) {
        this.push(props, {
            component: Message,
            name: 'message',
            sceneConfig: basePushFromRight
        })
    }

    toPublish() {
        this.push({}, {
            component: Publish,
            name: 'publish',
            sceneConfig: customFloatFromRight
        })
    }

    toWriteTopic() {
        this.push({}, {
            component: WriteTopic,
            name: 'WriteTopic',
            sceneConfig: basePushFromRight
        })
    }

    toSettings(){
        this.push({}, {
            component: Settings,
            name: 'Settings',
            sceneConfig: customFloatFromRight
        })
    }

    toLogin(){
        this.push({}, {
            component: Login,
            name: 'Login',
            sceneConfig: customFloatFromRight
        })
    }
}

module.exports = Router

