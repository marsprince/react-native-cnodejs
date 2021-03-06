var React = require('react-native')
var Dimensions = require('Dimensions');

var {
    Navigator
    } = React

var { width, height } = Dimensions.get('window');


var baseConfig = Navigator.SceneConfigs.PushFromRight;
var popGestureConfig = Object.assign({}, baseConfig.gestures.pop, {
    edgeHitWidth: width / 3
});


var fullPopGestureConfig = Object.assign({}, Navigator.SceneConfigs.FloatFromBottom.gestures.pop, {
    edgeHitWidth: width
})

exports.basePushFromRight=baseConfig

exports.customFloatFromRight = Object.assign({}, baseConfig, {
    gestures: {
        pop: popGestureConfig
    }
})


exports.customFloatFromBottom = Object.assign({}, Navigator.SceneConfigs.FloatFromBottom, {
    gestures: {
        pop: fullPopGestureConfig
    }
})
