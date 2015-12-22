var React = require('react-native')

var HtmlRender = require('react-native-html-render')

var window = require('../../util/window')


var { width, height } = window.get()

var {
    Platform,
    Component,
    View,
    Text,
    StyleSheet,
    Image,
    LinkingIOS,
    Navigator,
    IntentAndroid
    }=React

import {openUrl} from '../openUrlModule/openUrl'
var contentFontSize = 16


var styles = StyleSheet.create({
    img: {
        width: width - 30,
        height: width - 30,
        resizeMode: Image.resizeMode.contain
    }
})


var regs = {
    http: {
        topic: /^https?:\/\/cnodejs\.org\/topic\/\w*/,
        user: /^https?:\/\/cnodejs\.org\/user\/\w*/
    }
}


class HtmlContent extends Component {
    constructor(props) {
        super(props)
    }


    _onLinkPress(url) {
        let router = this.props.router

        if (/^\/user\/\w*/.test(url)) {
            let authorName = url.replace(/^\/user\//, '')

            router.toUser({
                loginname: authorName
            })
        }

        if (/^https?:\/\/.*/.test(url)) {
            if (regs.http.topic.test(url)) {
                let topicId = url.replace(/^https?:\/\/cnodejs\.org\/topic\//, '')

                return router.toTopicInfoListView({
                    id: topicId,
                    from: 'html'
                })
            }

            if (regs.http.user.test(url)) {
                let userName = url.replace(/^https?:\/\/cnodejs\.org\/user\//, '')

                return router.toUser({
                    loginname: userName
                })
            }
            openUrl(url)
        }

        if (/^mailto:\w*/.test(url)) {
            openUrl(url)
        }
    }


    _renderNode(node, index, parent, type) {
        var name = node.name

        var imgStyle = (this.props.style && this.props.style.img) || styles.img

        if (node.type == 'block' && type == 'block') {
            if (name == 'img') {
                var uri = window.parseImgUrl(node.attribs.src)
                if (/.*\.gif$/.test(uri)) return null
                return (
                    <Image
                        key={index}
                        source={{uri:uri}}
                        style={imgStyle}>
                    </Image>
                )
            }
        }
    }


    render() {
        return (
            <HtmlRender
                value={this.props.content}
                stylesheet={this.props.style}
                onLinkPress={this._onLinkPress.bind(this)}
                renderNode={this._renderNode.bind(this)}
                />
        )
    }

}

module.exports = HtmlContent
