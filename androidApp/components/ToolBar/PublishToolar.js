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
        marginTop:8,
    }
});

class PublishToolar extends Component{
    constructor(props) {
        super(props);
    }

    _onPress()
    {
        console.log(this.props.router)
        if (this.props.router && this.props.router.length > 1) {
            this.props.router.pop();
        }
    }

    render()
    {
        return (
            <View style={styles.navBar}>
                <TouchableHighlight onPress={this._onPress.bind(this)}>
                    <View style={{flex:1}}>
                        <Icon name="arrow-back" size={30} color="#FFFFFF" style={styles.back}/>
                    </View>
                </TouchableHighlight>
                <View style={{flex:8}}>
                    <Text style={styles.text}>
                        {this.props.text}
                    </Text>
                </View>
                <TouchableHighlight style={{flex:1}}>
                    <Text style={styles.text}>
                        发表
                    </Text>
                </TouchableHighlight>
            </View>
        )
    }
}

module.exports=PublishToolar