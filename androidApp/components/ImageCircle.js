/**
 * Created by mars on 2015/11/6.
 * 圆形的头像图标
 */

'use strict';

var React = require('react-native');
var {
    Component,
    StyleSheet,
    Image,
    View,
    Text
    } = React;

var styles = StyleSheet.create({

});

class ImageCircle extends Component{
    constructor(props) {
        super(props);
    }
    render()
    {
        var {url,width,height,borderRadius}=this.props;
        return (
            <View>
                <Image source={{uri:url}} style={{width:width,height:height,borderRadius:borderRadius}} >
                </Image>
            </View>
        )
    }
}

module.exports=ImageCircle