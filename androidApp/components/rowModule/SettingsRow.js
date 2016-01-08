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
    TouchableHighlight,
    PixelRatio
    } = React;

import Switch from "./../SwitchModule/Switch"
var styles = StyleSheet.create({
    row:{
        backgroundColor: 'white',
    },
    textRow:{
        flex:5,
        justifyContent: 'center',
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    text:{
        fontSize: 18,
        lineHeight: 24,
    },
    subtext:{
        fontSize: 12,
        lineHeight: 18,
    },
    separator:{
        height: 1 / PixelRatio.get(),
        backgroundColor: '#bbbbbb',
    },
    actions:{
        flex:1,
        paddingVertical: 10,
        alignItems:'center',
    }
});

class SettingsRow extends Component{
    constructor(props) {
        super(props);
    }
    render()
    {
        var {text,subText,switchPress,switchValue}=this.props;
        return (
                <TouchableHighlight style={styles.row} onPress={()=>{switchPress?switchPress():null}}>
                    <View style={{flex:1}}>
                        <View style={{flexDirection:'row',flex:1}} >
                            <View style={styles.textRow}>
                                <Text style={styles.text}>
                                    {text}
                                </Text>
                                <Text style={styles.subtext}>
                                    {subText}
                                </Text>
                            </View>
                            <View style={styles.actions}>
                                <Switch value={switchValue} onValueChange={()=>{switchPress?switchPress():null}}>
                                </Switch>
                            </View>
                        </View>
                        <View style={styles.separator} />
                    </View>

                </TouchableHighlight>
        )
    }
}

module.exports=SettingsRow