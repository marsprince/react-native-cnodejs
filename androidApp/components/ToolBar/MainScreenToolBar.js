/**
 * Created by mars on 2015/11/24.
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

class MainScreenToolBar extends Component{
    constructor(props) {
        super(props);
    }

    _onPress()
    {
        if (this.props.router && this.props.router.length > 1) {
            this.props.router.pop();
        }
    }

    _renderText(text)
    {
        return(
            <Text style={styles.text}>
                {text}
            </Text>
        )
    }

    render()
    {
        const {drawerOpen} =this.props
        return (
            <View style={styles.navBar}>
                <TouchableHighlight onPress={drawerOpen?drawerOpen:null}>
                    <View style={{flex:1}}>
                        <Icon name="view-list" size={30} color="#FFFFFF" style={styles.back}/>
                    </View>
                </TouchableHighlight>
                <View style={{flex:10}}>
                    {this.props.text ? this._renderText(this.props.text) : null}
                </View>
            </View>
        )
    }
}

module.exports=MainScreenToolBar