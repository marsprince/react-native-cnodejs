/**
 * Created by liujia on 2015/12/4.
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

var SimpleRow=require('./SimpleRow')
var NavBar=require('./../components/ToolBar/BasicToolBar')
import SettingsRow from "./SettingsRow.js"
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

class Settings extends Component{
    constructor(props) {
        super(props);
    }

    componentDidMount()
    {
        this.props.actions.initConfig();
    }

    render()
    {
        console.log(this.props.state)
        return (
            <View style={{flex:1}}>
                <NavBar text="设置" router={this.props.router}>
                </NavBar>
                <SettingsRow text="测试1" subText="小标题1">
                </SettingsRow>
                <SettingsRow text="测试2" subText="这个功能没做">
                </SettingsRow>
            </View>
        )
    }
}

module.exports=Settings