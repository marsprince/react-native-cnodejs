/**
 * Created by liujia on 2015/11/2.
 *最简单的行部件
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
        height:40,
        backgroundColor: 'white',
        justifyContent: 'center',
        paddingHorizontal: 15,
        paddingVertical: 8,
    },
    text:{
        fontSize: 15,
        color: '#888888',
        lineHeight: 20,
    },
    separator:{
        height: 1 / PixelRatio.get(),
        backgroundColor: '#bbbbbb',
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
            <TouchableOpacity onPress={()=>onPress?onPress():null}>
                <View style={{flex:1}}>
                    <View style={styles.row}>
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