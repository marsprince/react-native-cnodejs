/**
 * Created by mars on 2016/1/26.
 */

import React,{
    Component,
    TouchableHighlight,
    StyleSheet,
    Text,
    View
    } from "react-native"

var styles = StyleSheet.create({
    textStyle:{
        margin:10,
        textAlign:'center'
    },
});

class BasicButton extends Component{
    render()
    {
        let {value,onPress}=this.props
        return(
            <TouchableHighlight activeOpacity={1} underlayColor="#eddcdc" onPress={onPress}>
                <Text style={styles.textStyle}>{value}</Text>
            </TouchableHighlight>
        )
    }
}

module.exports = BasicButton;