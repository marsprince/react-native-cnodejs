/**
 * Created by liujia on 2015/12/4.
 */

import React,{
    Component,
    SwitchIOS
    } from "react-native"

class Switch extends Component{
    render()
    {
        return(
            <SwitchIOS {...this.props}>
            </SwitchIOS>
        )
    }
}

module.exports = Switch;