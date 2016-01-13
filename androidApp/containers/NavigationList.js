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
import MenuRow from '../components/rowModule/MenuRow'
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
                <MenuRow text="消息" icon="message" onPress={this._onPressMessage.bind(this)} router={this.props.router}>
                </MenuRow>
                <MenuRow text="设置" icon="settings" onPress={this._onPressSettings.bind(this)} router={this.props.router}>
                </MenuRow>
                <MenuRow text="关于" icon="info" onPress={this._onPressAbout.bind(this)} router={this.props.router}>
                </MenuRow>
            </View>
        )
    }
}

module.exports=NavigationList