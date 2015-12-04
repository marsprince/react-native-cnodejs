/**
 * Created by liujia on 2015/12/4.
 */

import React,{
    Component,
    SwitchAndroid
    } from "react-native"

class Switch extends Component{
    render()
    {
        return(
            <SwitchAndroid {...this.props}>
            </SwitchAndroid>
        )
    }
}

module.exports = Switch;