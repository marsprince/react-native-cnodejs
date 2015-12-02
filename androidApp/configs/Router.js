var React = require('react-native')

// Components
//var User = require('../containers/User')
//var Topic = require('../containers/Topic')
//var Comments = require('../containers/Comments')
//var Message = require('../containers/Message')
var About = require('../components/About')
//var Publish = require('../containers/Publish')
var BarCode=require('../containers/BarCode')
var TopicInfoListView=require('../components/TopicInfoListView')
// Config
var sceneConfig = require('./sceneConfig')


var {
    Navigator
    } = React

var customFloatFromRight = sceneConfig.customFloatFromRight

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
            sceneConfig: customFloatFromRight
        })
    }

    toQRCode(props) {
        this.push(props, {
            component: QRCode,
            name: 'qrCode',
            sceneConfig: Navigator.SceneConfigs.FloatFromBottom
        })
    }



    toPublish() {
        this.push({}, {
            component: Publish,
            name: 'publish',
            sceneConfig: customFloatFromRight
        })
    }


    replaceWithHome() {
        this.navigator.popToTop()
    }

    replaceWithTopic(props) {
        let routesList = this.navigator.getCurrentRoutes()
        let index = routesList[routesList.length - 1].index
        var route = {
            props: props,
            index: index,
            component: Topic,
            sceneConfig: customFloatFromRight
        }
        this.navigator.replace(route)
    }
}

module.exports = Router

