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
    TouchableHighlight,
    TouchableOpacity
    } = React;

var Icon = require('react-native-vector-icons/MaterialIcons');
import BasicButton from '../buttonModule/BasicButton'

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
    },
    replyButton:{
        flex:1,
        marginVertical:8,
    },
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
        const {disabled,onPress} =this.props
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
                <View style={styles.replyButton}>
                    <BasicButton value="发布" disabled={disabled} onPress={onPress}>
                    </BasicButton>
                </View>
            </View>
        )
    }
}

module.exports=PublishToolar