/**
 * Created by mars on 2015/10/12.
 */

'use strict';

var React = require('react-native');
var {
    Component,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    } = React;

var DrawerLayout=require('./DrawerLayout');

class HomePage extends Component{
    constructor(props) {
        super(props);
    }
    render()
    {
        return (
            <DrawerLayout>
            </DrawerLayout>
        )
    }
}

module.exports=HomePage