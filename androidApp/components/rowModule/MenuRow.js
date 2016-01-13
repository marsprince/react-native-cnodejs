/**
 * Created by mars on 2016/1/13.
 * a row with a left icon
 */

'use strict';

var React = require('react-native');
var {
    Component,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    PixelRatio,
    } = React;

var Icon = require('react-native-vector-icons/MaterialIcons');

var styles = StyleSheet.create({
    row:{
        height:56,
        backgroundColor: 'white',
    },
    text:{
        fontSize: 16,
        color: '#888888',
        lineHeight: 20,
    },
    separator:{
        height: 1 / PixelRatio.get(),
        backgroundColor: '#bbbbbb',
    },
    textRow:{
        flex:1,
        flexDirection:'row',
        paddingHorizontal: 15,
        paddingVertical: 10,
    },

});

class MenuRow extends Component{
    constructor(props) {
        super(props);
    }
    render()
    {
        var {text,onPress,icon}=this.props;
        return (
            <TouchableOpacity style={styles.row} onPress={()=>onPress?onPress():null}>
                <View style={{flex:1}}>
                    <View style={styles.textRow}>
                        <View style={{flex:1,justifyContent:'center'}}>
                            <Icon name={icon} size={20} style={styles.back}/>
                        </View>
                        <View style={{flex:5,justifyContent:'center'}}>
                            <Text style={styles.text}>
                                {text}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.separator} />
                </View>
            </TouchableOpacity>
        )
    }
}

module.exports=MenuRow