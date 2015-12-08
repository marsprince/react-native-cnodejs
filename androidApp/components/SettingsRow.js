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

import Switch from "./SwitchModule/Switch"
var styles = StyleSheet.create({
    row:{
        height:40,
        backgroundColor: 'white',
    },
    textRow:{
        flex:5,
        justifyContent: 'center',
        paddingHorizontal: 15,
        paddingVertical: 8,
    },
    text:{
        fontSize: 14,
        lineHeight: 20,
    },
    subtext:{
        fontSize: 10,
        lineHeight: 16,
    },
    separator:{
        height: 1 / PixelRatio.get(),
        backgroundColor: '#bbbbbb',
    },
    actions:{
        flex:1,
        justifyContent: 'center',
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
             <TouchableHighlight onPress={() => {switchPress?switchPress():null}}>
                <View style={styles.row}>
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
                            <Switch value={switchValue}>
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