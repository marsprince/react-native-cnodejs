/**
 * Created by mars on 2015/12/1.
 */

import React,{
    Component,Image,View
    } from "react-native"

class Loading extends Component{
    constructor(porps) {
        super(porps);
    }
    render() {
        return(
                <Image source={require("../../image/loading.gif")} style={{height:50,width:50}}>
                </Image>
        )
    }
}

module.exports=Loading