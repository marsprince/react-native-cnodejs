/**
 * Created by mars on 2015/11/16.
 * µ¼º½Ìõ
 */

'use strict';

var React = require('react-native');
var {
    Component,
    StyleSheet,
    Text,
    View,
    PixelRatio,
    Image
    } = React;

var styles = StyleSheet.create({
    navBar:{
        backgroundColor: '#2C2C2C',
        height:56
    },
    text:{
        fontSize: 15,
        color: '#888888',
        lineHeight: 20,
    }
});

class NavigationTitleBar extends Component{
    constructor(props) {
        super(props);
    }

    render()
    {
        return (
            <View style={styles.navBar}>

            </View>
        )
    }
}

module.exports=NavigationTitleBar