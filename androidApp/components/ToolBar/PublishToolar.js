/**
 * Created by liujia on 2015/12/8.
 */


'use strict';

var React = require('react-native');
var {
    Component,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight
    } = React;

var Icon = require('react-native-vector-icons/MaterialIcons');
import {Button} from 'react-native-material-design'
var styles = StyleSheet.create({
    navBar:{
        backgroundColor: '#2C2C2C',
        height:56,
        flexDirection:"row",
        paddingLeft:10,
    },
    text:{
        flex:10,
        fontSize: 19,
        color: '#FFFFFF',
        marginTop:10,
        marginLeft:10,
        textAlign:'left',
    },
    back:{
        marginTop: 7,
    }
});

class PublishToolar extends Component{
    constructor(props) {
        super(props);
    }

    _onPress()
    {
        if (this.props.router && this.props.router.length > 1) {
            this.props.router.pop();
        }
    }

    render()
    {
        const {disabled} =this.props
        return (
            <View style={styles.navBar}>
                <TouchableHighlight onPress={this._onPress.bind(this)}>
                    <View style={{flex:1}}>
                        <Icon name="arrow-back" size={30} color="#FFFFFF" style={styles.back}/>
                    </View>
                </TouchableHighlight>
                <View style={{flex:5}}>
                    <Text style={styles.text}>
                        {this.props.text}
                    </Text>
                </View>
                <View style={{flex:1, marginTop:5,marginLeft:10}}>
                    <Button value="发布"  primary={'googleBlue'} disabled={disabled}/>
                </View>
            </View>
        )
    }
}

module.exports=PublishToolar