/**
 * Created by liujia on 2015/11/2.
 */

'use strict';

var React = require('react-native');
var {
    Component,
    StyleSheet,
    Text,
    View,
    TextInput,
    Dimensions
    } = React;
import {Button} from 'mrn'
var styles = StyleSheet.create({
    row:{
        backgroundColor: '#EDEEF2',
        paddingHorizontal: 15,
        paddingVertical: 8,
        flex:1,
        height:60,
        flexDirection:'row',
        position:'absolute',
        bottom:0,
        right:0,
        left:0
    },
});

var deviceWidth = Dimensions.get('window').width;

class ReplyRow extends Component{
    constructor(props) {
        super(props);
    }
    render()
    {
        var {text,onPress}=this.props;
        return (
                <View style={styles.row} >
                    <View style={{flex:6,justifyContent:'center'}}>
                        <TextInput defaultValue = {text} placeholder="说点什么吧"  style={{ borderColor: 'gray', borderWidth: 1}}>
                        </TextInput>
                    </View>
                    <View style={{flex:1,paddingTop:5}}>
                        <Button value="回复"  primary={'googleBlue'}/>
                    </View>
                </View>
        )
    }
}

module.exports=ReplyRow
