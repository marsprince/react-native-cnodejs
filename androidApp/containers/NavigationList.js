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
    ListView,
    TouchableOpacity,
    } = React;

var Userinfo=require('./../components/UserInfo')
var SimpleRow=require('./../components/rowModule/SimpleRow')
var TopicListView=require('./../components/TopicListView')
import {alertLogin} from '../components/alertModule/alertLogin'

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
    _onPressAbout(){
        this.props.router.toAbout()
    }

    _onPressMessage(){
        if(this.props.state.userState.isLogin)
        {
            this.props.router.toMessage()
        }
        else{
            alertLogin(this.props.router)
        }
    }

    _onPressSettings(){
        this.props.router.toSettings()
    }
    render()
    {
        return (
            <View style={{flex:1}}>
                <Userinfo router={this.props.router} state={this.props.state} actions={this.props.actions}>
                </Userinfo>
                <SimpleRow text="消息" onPress={this._onPressMessage.bind(this)} router={this.props.router}>
                </SimpleRow>
                <SimpleRow text="设置" onPress={this._onPressSettings.bind(this)} router={this.props.router}>
                </SimpleRow>
                <SimpleRow text="关于" onPress={this._onPressAbout.bind(this)} router={this.props.router}>
                </SimpleRow>
            </View>
        )
    }
}

module.exports=NavigationList