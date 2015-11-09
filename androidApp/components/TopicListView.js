var React = require('react-native')
var moment = require('moment')

var TopicService = require('../services/TopicService')
var TopicRow = require('./TopicRow')

var window = require('../util/window')

var { width, height } = window.get()

var {
    View,
    StyleSheet,
    ScrollView,
    Component,
    Text,
    StatusBarIOS,
    Image,
    ListView,
    ActivityIndicatorIOS,
    TouchableHighlight,
    LayoutAnimation,
    TouchableOpacity
    } = React


var extendsStyles = StyleSheet.create({
    topic: {
        width: width - 100
    },
    loadingupdate: {
        width: width,
        marginTop: 20
    },
    loadingget: {
        width: width,
        marginBottom: 20,
        marginTop: 20
    }
});

class PageListView extends Component {
    constructor(porps) {
        super(porps)
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
        this.page = 1
        this.listRows = {}
        this.state = {
            ds: ds.cloneWithRows(this.props.data),
            isLoading: false,
            loadingPosition: 'top',
            getTopicError: null
        }
    }


    componentDidMount() {
        this._fetchTopic('update')
    }


    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.data != this.props.data || nextState.isLoading != this.state.isLoading) {
            return true
        }
        return false
    }


    componentWillReceiveProps(nextProps) {
        if (nextProps.data !== this.props.data) {
            //console.log(this.props.data.length);
            //LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
            this.setState({
                ds: this.state.ds.cloneWithRows(nextProps.data)
            })
        }
    }


    onEndReached() {
        this._fetchTopic('get')
    }

    onScroll(e) {
        if (e.nativeEvent.contentOffset.y < -90) {
            this._fetchTopic('update')
        }
    }

    scrollToTop() {
        this._listView.setNativeProps({
            contentOffset: {
                x: 0,
                y: 0
            }
        })
    }


    _onRowPress(topic) {
        this.props.router.toTopic({
            topic: topic,
            from: 'home'
        })
    }

    _onGetAgainPress() {
        this._fetchTopic('get')
    }


    _fetchTopic(type) {
        if (this.isFreshing) {
            if (type == 'get') {
                this.setState({
                    getTopicError: 'fetchFailed'
                })
            }
            return
        }


        this.isFreshing = true
        this.setState({
            isLoading: true,
            loadingType: type
        })

        var page = (type == 'update') ? 1 : this.page + 1
        var tab = this.props.tab.name
        var actions = this.props.actions
        var getTopics = actions.getTopicsByTab
        var updateTopics = actions.updateTopicsByTab

        TopicService.req.getTopicsByTab({
            page: page,
            tab: tab,
            limit: 10
        })
            .then(topics=> {
                LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)
                type == 'update' ? updateTopics(topics, tab) : getTopics(topics, tab)
                return null
            })
            .catch(err=> {
                console.warn(err)
                if (type == 'get') {
                    return err
                }
            })
            .done((err)=> {
                this.isFreshing = false
                this.setState({
                    isLoading: false,
                    err: err
                })
                this.page = page
            })
    }


    _renderLoading(loadingType) {
        return (
            <ActivityIndicatorIOS
                hidesWhenStopped={false}
                size="large"
                animating={true}
                style={[extendsStyles['loading'+loadingType]]}
                />
        )
    }

    _renderHeader() {
        if (this.state.isLoading && this.state.loadingType == 'update') {
            return this._renderLoading('update')
        }

        return null
    }

    renderRow(topic, sectionId, rowId, highlightRow) {
        var isVisible = false
        if (rowId < 10) isVisible = true
        return (
            <TopicRow
                isVisible={true}
                ref={view => this.listRows[rowId.toString()]=view}
                key={topic.id}
                onPress={this._onRowPress.bind(this)}
                topic={topic}
                footer={this._renderTopicFooter(topic)}
                ></TopicRow>
        )
    }


    render() {
        return (
            <View style={[{width:width,height:height - 40},{backgroundColor:'white'}]}>
                <ListView
                    ref={view => {this._listView = view}}
                    style={{backgroundColor:'rgba(255,255,255,1)'}}
                    onScroll={this.onScroll.bind(this)}
                    showsVerticalScrollIndicator={true}
                    initialListSize={10}
                    pagingEnabled={false}
                    removeClippedSubviews={true}
                    dataSource={this.state.ds}
                    renderRow={()=>renderRow()}
                    onEndReached={this.onEndReached.bind(this)}

                    />
            </View>
        )
    }
}


var styles = StyleSheet.create({
    "row": {
        "height": 90,
        "flexDirection": "row",
        "borderBottomColor": "rgba(0, 0, 0, 0.02)",
        "borderBottomWidth": 1,
        "paddingTop": 25,
        "paddingRight": 0,
        "paddingBottom": 25,
        "paddingLeft": 20
    },
    "imgWrapper": {
        "width": 90,
        "position": "absolute",
        "left": 20,
        "top": 25,
        "height": 65
    },
    "img": {
        "height": 40,
        "width": 40,
        "borderRadius": 20
    },
    "topic": {
        "marginLeft": 60
    },
    "title": {
        "fontSize": 15
    },
    "topicFooter": {
        "marginTop": 12,
        "flexDirection": "row"
    },
    "topicFooter text": {
        "fontSize": 11,
        "color": "rgba(0, 0, 0, 0.5)"
    },
    "topicFooter date": {
        "position": "absolute",
        "right": 0,
        "top": 0
    },
    "topicFooter count": {
        "marginRight": 15
    },
    "topicFooter top": {
        "fontSize": 11,
        "marginTop": 1,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 10,
        "color": "#E74C3C"
    },
    "topicFooter good": {
        "fontSize": 11,
        "marginTop": 1,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 10,
        "color": "#2ECC71"
    },
    "topicFooter tab": {
        "fontSize": 11,
        "marginTop": 1,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 10
    },
    "loading": {
        "marginTop": 250
    },
    footerErrorText: {
        fontSize: 20,
        textAlign: 'center',
        flex: 1
    },
    footerError: {
        height: 76,
        width: width,
        flexDirection: 'column'
    }
})

module.exports = PageListView;
