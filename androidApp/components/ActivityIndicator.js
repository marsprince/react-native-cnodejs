/**
 * Created by liujia on 2015/10/16.
 */

var React = require('react-native');
var {
    Component,
    StyleSheet,
    Text,
    View,
    PixelRatio,
    ListView,
    Animated,
    } = React;

var styles = StyleSheet.create({
    refresh:{

        width: 36,
        height: 36,
        position:'absolute',
        top:100,
        right:200,

        borderStyle:'solid',
        borderRadius : 18,
        //borderWidth :3,
        borderTopWidth:3,
        borderBottomWidth:3,
        borderRightWidth:3,
        borderLeftWidth:3,
        borderColor:'#03ade0',
        //borderRightWidth:24,
        //borderRightColor:'#03ade0',
        //borderRightColor :  '#transparent',

    }
});

class ActivityIndicator extends Component{
    constructor(props) {
        super(props);
        this.state={
            anim:new Animated.Value(0)
        }
    }
    componentDidMount() {
        Animated.timing(       // Uses easing functions
            this.state.anim, // The value to drive
            {
                toValue: 1,        // Target
                duration: 2000,    // Configuration
            },
        ).start();             // Don't forget start!
    }
    render()
    {
        return (
            <View style={styles.refresh}>

            </View>
          /*  <Animated.View style={[styles.refresh,{
               transform: [   // Array order matters
                {rotate: this.state.anim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [
                    '0deg', '360deg' // 'deg' or 'rad'
                  ],
                })},
              ]
            }]}>

            </Animated.View>*/
        )
    }
}

module.exports=ActivityIndicator