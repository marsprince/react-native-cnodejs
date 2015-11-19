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
    Image,
    ListView,
    ActivityIndicatorIOS,
    TouchableHighlight,
    TouchableOpacity,
    ToastAndroid
    } = React

var localConfig=require("../configs/localConfig")
class TopicListView extends Component {
    constructor(porps) {
        super(porps)
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
        this.page=1
        this.data=[]
        this.state = {
            ds: ds.cloneWithRows(this.data),
            isLoading: true,
            loadingPosition: 'top',
            getTopicError: null
        }
    }

    _genRows(){
        var params={
            page: this.page,
            limit: localConfig.perPageLimit
        }
        if(this.props.tab) params['tab']=this.props.tab;

        TopicService.req.getTopicsByTab(params)
            .then(topics=> {
                var newData=this.data.concat(topics)
                this.setState({
                    isLoading: false,
                    ds: this.state.ds.cloneWithRows(newData),
                })
                this.data=newData
            })
            .catch(err=> {
                console.warn(err)
            })
            .done((err)=> {
                this.isFreshing = false
                this.setState({
                    isLoading: false,
                    err: err
                })
            })
    }

    componentDidMount() {
        this._genRows();
    }

    _renderRow(topic, sectionId, rowId, highlightRow) {
        return (
            <TopicRow
                //ref={view => this.listRows[rowId.toString()]=view}
                topic={topic}
                router={this.props.router}
                >
            </TopicRow>
        )
    }

    _onEndReached()
    {
        this.page=this.page+1;
        this._genRows();
    }
    render() {
        /*if(!this.props.isRender)
        {
            return (
                <View style={styles.container}>
                <Text>wwwwwwwwwwwwait...</Text>
                    </View>
            )
        }*/
        if (this.state.isLoading) {
            return (
                <View style={styles.container}>
                    <Text>moha...</Text>
                </View>
            )
        }
        return (
                <ListView
                    ref={view => {this._listView = view}}
                    style={styles.listStyle}
                    //onScroll={()=>onScroll()}
                    showsVerticalScrollIndicator={true}
                    initialListSize={10}
                    pagingEnabled={false}
                    dataSource={this.state.ds}
                    renderRow={this._renderRow.bind(this)}
                    onEndReached={this._onEndReached.bind(this)}
                    onEndReachedThreshold={20}
                    />
        )
    }
}


var styles = StyleSheet.create({
    "listStyle":{
        backgroundColor:'rgba(255,255,255,1)',
        flex:1
    }
})

module.exports = TopicListView;
