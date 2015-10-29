/**
 * Created by liujia on 2015/10/16.
 */

var React = require('react-native');
var {
    Component,
    StyleSheet,
    Text,
    View,
    Easing,
    ListView,
    Animated,
    TouchableHighlight
    } = React;

var baseWidth = 70;
var baseHeight = 70;
var bladeHeight = 0.3 * baseHeight;
var bladeWidth = 0.04 * baseWidth;
var styles = StyleSheet.create({
    center: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 10,
        bottom: 0,
    },
    spinner: {
        width: baseWidth,
        height: baseHeight,
    },
    spinnerBlade: {
        position: 'absolute',
        left: baseWidth,
        bottom: 0,
        width: bladeWidth,
        height: bladeHeight,
        backgroundColor: "#69717d",
    },
    spinnerOverlay: {
        position: 'absolute',
        left: baseWidth - bladeHeight / 2.5,
        bottom: -bladeHeight / 2,
        width: bladeHeight,
        height: bladeHeight,
        borderRadius: bladeHeight / 2,
        backgroundColor: '#E9EAED'
    },
    spinnerBlade1: {
        transform: [{
            rotate: '0deg'
        }]
    },
    spinnerBlade2: {
        transform: [{
            translateX: Math.tan(30 * (2 * Math.PI / 360)) * bladeHeight / 2
        }, {
            rotate: '30deg'
        }]
    },
    spinnerBlade3: {
        transform: [
            {rotate: '90deg'},
            {translateX: bladeHeight / 2},
            {translateY: -bladeHeight / 2},
            {translateX: -Math.tan(30 * (2 * Math.PI / 360)) * bladeHeight / 2},
            {rotate: '-30deg'}
        ]
    },
    spinnerBlade4: {
        transform: [
            {rotate: '90deg'},
            {translateX: bladeHeight / 2},
            {translateY: -bladeHeight / 2}
        ]
    },
    spinnerBlade5: {
        transform: [
            {rotate: '90deg'},
            {translateX: bladeHeight / 2},
            {translateY: -bladeHeight / 2},
            {translateX: Math.tan(30 * (2 * Math.PI / 360)) * bladeHeight / 2},
            {rotate: '30deg'}
        ]
    },
    spinnerBlade6: {
        transform: [
            {rotate: '180deg'},
            {translateY: -bladeHeight},
            {translateX: -Math.tan(30 * (2 * Math.PI / 360)) * bladeHeight / 2},
            {rotate: '-30deg'}
        ]
    },
    spinnerBlade7: {
        transform: [{
            rotate: '180deg'
        }, {translateY: -bladeHeight}]
    },
    spinnerBlade8: {
        transform: [
            {rotate: '180deg'},
            {translateY: -bladeHeight},
            {translateX: Math.tan(30 * (2 * Math.PI / 360)) * bladeHeight / 2},
            {rotate: '30deg'}]
    },
    spinnerBlade9: {
        transform: [{
            rotate: '270deg'
        },
            {translateX: -bladeHeight / 2},
            {translateY: -bladeHeight / 2},
            {translateX: -Math.tan(30 * (2 * Math.PI / 360)) * bladeHeight / 2},
            {rotate: '-30deg'}
        ]
    },
    spinnerBlade10: {
        transform: [{
            rotate: '270deg'
        }, {translateX: -bladeHeight / 2},
            {translateY: -bladeHeight / 2}]
    },
    spinnerBlade11: {
        transform: [{
            rotate: '270deg'
        },
            {translateX: -bladeHeight / 2},
            {translateY: -bladeHeight / 2},
            {translateX: Math.tan(30 * (2 * Math.PI / 360)) * bladeHeight / 2},
            {rotate: '30deg'}
        ]
    },
    spinnerBlade12: {
        transform: [{
            translateX: -Math.tan(30 * (2 * Math.PI / 360)) * bladeHeight / 2
        }, {
            rotate: '-30deg'
        }]
    },


});

class ActivityIndicator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bladeArray: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
        }
    }

    render() {
        this.anims = this.anims || this.state.bladeArray.map(
            () => new Animated.Value(1)
        );
        this._animation = function () {
            Animated.parallel(
                this.anims.map((anim, ii) =>
                {
                    this._singleAnimation(anim,ii,0)
                }
                )).start()
        }.bind(this);

        this._singleAnimation=function(anim,index,count)
        {
            anim.setValue(1);
            Animated.sequence([
                count===0?Animated.delay(0.083*index*1000):Animated.delay(0),
                Animated.timing(anim, {
                    toValue: 0,
                    easing: Easing.linear,
                    duration: 1000
                })
            ],{stopTogether:false}).start(endState =>
            {
                count++;
                if(endState.finished)
                {
                    this._singleAnimation(anim,index,count)
                }
            })
        };
        return (
            <View>
                <TouchableHighlight onPress={()=>this._animation()}>
                    <Text>press!</Text>
                </TouchableHighlight>

                <View style={[styles['spinner'],styles.center,{flexDirection :'row'}]}>
                    {
                        this.state.bladeArray.map(
                            (index, ii) => (
                                <Animated.View style={[styles.spinnerBlade,styles['spinnerBlade'+index],{
                 opacity:this.anims[ii]
                 }]}>
                                </Animated.View>
                            )
                        )}
                    <View style={styles.spinnerOverlay}>
                    </View>
                </View>
            </View>

        )
    }
}

module.exports = ActivityIndicator