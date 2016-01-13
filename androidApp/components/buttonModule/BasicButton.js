/**
 * Created by mars on 2016/1/12.
 */

import React,{
    Component,
    TouchableOpacity,
    StyleSheet,
    Text,
    View
    } from "react-native"

var styles = StyleSheet.create({
    button:{
        flex:1,
        borderWidth:1,
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#4987E4'
    },
    buttonText:{
        fontSize: 16,
        lineHeight:22
    }
});

class BasicButton extends Component{
    render()
    {
        let {value,disabled,onPress}=this.props
        return(
            <View style={[{flex:1,opacity:(disabled?0.5:1)}]}>
                <TouchableOpacity activeOpacity={0.5} style={styles.button}  onPress={disabled ? undefined : onPress}>
                    <Text style={styles.buttonText}>{value}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

module.exports = BasicButton;