/**
 * Created by mars on 2015/12/21.
 */

import React,{
    Component,Image,View,Text
    } from "react-native"

class Error extends Component{
    constructor(porps) {
        super(porps);
    }
    _renderText(){
        const {text}=this.props
        if(text)
        {
            return(
                <Text style={{ fontSize: 14,color: '#888888',lineHeight: 20,marginTop:10}}>
                    {text}
                </Text>
            )
        }
    }
    render() {
        return(
            <View style={{flex:1,alignItems :'center',justifyContent :'center'}}>
                <Image source={require("../../image/error.png")} style={{height:80,width:80}}>
                </Image>
                {this._renderText()}
            </View>

        )
    }
}

module.exports=Error