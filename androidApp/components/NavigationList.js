/**
 * Created by mars on 2015/10/15.
 */

'use strict';

var React = require('react-native');
var {
    Component,
    StyleSheet,
    Text,
    View,
    PixelRatio,
    ListView,
    TouchableOpacity,
    ToastAndroid
    } = React;

var Userinfo=require('./UserInfo')
var SimpleRow=require('./SimpleRow')
var TopicListView=require('./TopicListView')

var styles = StyleSheet.create({

    refresh:{
        width: 136,
        height: 136,
        position:'absolute',
        top:100,
        left:100,

        borderWidth: 10,
        borderRadius: 10,
        //borderColor: 'cyan',

        //borderRightWidth:24,
        borderRightColor:'black',
        //borderRightColor:'#03ade0',
        //borderRightColor :  '#transparent',

    }
});

class NavigationList extends Component{
    constructor(props) {
        super(props);
    }
    _onPress(){
        this.props.router.toBarCode()
    }
    render()
    {
        return (
            <View style={{flex:1}}>
                <Userinfo >
                </Userinfo>
                <SimpleRow text="登录" onPress={this._onPress.bind(this)}>
                </SimpleRow>
            </View>
        )
    }
}

module.exports=NavigationList