/**
 * Created by liujia on 2015/12/17.
 */

var React = require('react-native')
var moment = require('moment')

var MessageService = require('../services/MessageService')
var MessageRow = require('./MessageRow')

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
    TouchableHighlight,
    TouchableOpacity,
    ToastAndroid
    } = React

import Loading from "./Loading.js";

class MessageListView extends Component {
    constructor(porps) {
        super(porps)
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
        this.page=1
        this.data=[]
        this.state = {
            ds: ds.cloneWithRows(this.data),
            isLoading: true,
        }
    }

    _genRows(){
        MessageService.req.get(this.props.state.userState.accesstoken)
            .then(messages=> {
                var newData=this.data.concat(this.props.isRead ? messages.has_read_messages : messages.hasnot_read_messages)
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
                this.setState({
                    isLoading: false,
                    err: err
                })
            })
    }

    componentDidMount() {
        this._genRows();
    }

    _renderRow(message, sectionId, rowId, highlightRow) {
        return (
            <MessageRow
                //ref={view => this.listRows[rowId.toString()]=view}
                message={message}
                router={this.props.router}
                >
            </MessageRow>
        )
    }

    _onEndReached()
    {
        this.page=this.page+1;
        this._genRows();
    }
    render() {
        if (this.state.isLoading) {
            return (
                <View style={{flex:1,alignItems:'center',justifyContent :'center'}}>
                    <Loading>
                    </Loading>
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
                removeClippedSubviews={true}
                dataSource={this.state.ds}
                renderRow={this._renderRow.bind(this)}
                //onEndReached={this._onEndReached.bind(this)}
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

module.exports = MessageListView;
