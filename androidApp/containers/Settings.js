/**
 * Created by liujia on 2015/12/4.
 */

'use strict';


var React = require('react-native');
var {
    Component,
    StyleSheet,
    Text,AsyncStorage,
    View,
    ListView,
    TouchableOpacity,
    } = React;

var SimpleRow=require('./../components/rowModule/SimpleRow')
var NavBar=require('./../components/ToolBar/BasicToolBar')
import SettingsRow from "./../components/rowModule/SettingsRow.js"

class Settings extends Component{
    constructor(props) {
        super(props);
    }

    componentDidMount()
    {
        //AsyncStorage.removeItem('config')
        this.props.actions.initConfig()
        this.props.actions.loadConfig()
    }

    _switchPress(index){
        //update value in storage,then update config in redux
        var {config} =this.props.state.configState
        config[index].value=!config[index].value
        this.props.actions.setConfig(config)
    }

    render()
    {
        var {config} =this.props.state.configState

        return (
            <View style={{flex:1}}>
                <NavBar text="设置" router={this.props.router}>
                </NavBar>
                {config?config.map((item,index)=>{
                    return(
                        <SettingsRow
                            text={item.text}
                            subText={item.subText}
                            switchValue={item.value}
                            switchPress={this._switchPress.bind(this,index)}>
                        </SettingsRow>
                    )
                }):null}

            </View>
        )
    }
}

module.exports=Settings