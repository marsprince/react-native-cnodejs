/**
 * Created by liujia on 2015/11/2.
 *a simple row with sepeator
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
        justifyContent:'center',
        paddingHorizontal: 15,
        paddingVertical: 10,
    }
});

class SimpleRow extends Component{
    constructor(props) {
        super(props);
    }
    render()
    {
        var {text,onPress}=this.props;
        return (
            <TouchableOpacity style={styles.row} onPress={()=>onPress?onPress():null}>
                <View style={{flex:1}}>
                    <View style={styles.textRow}>
                        <Text style={styles.text}>
                            {text}
                        </Text>
                    </View>
                    <View style={styles.separator} />
                </View>
            </TouchableOpacity>
        )
    }
}

module.exports=SimpleRow