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
import BasicButton from '../buttonModule/BasicButton.js'
var styles = StyleSheet.create({
    row:{
        paddingHorizontal: 5,
        paddingVertical: 5,
        flex:1,
        height:60,
        flexDirection:'row',
        position:'absolute',
        bottom:0,
        right:0,
        left:0,
        borderTopWidth:1,
        borderTopColor:'#bbbbbb'
    },
    replyButton:{
        flex:1,
        borderWidth:1,
        marginTop:5,
        borderRadius:5,
        borderColor:'#bbbbbb'
    },
    textInput:{
        marginTop:5,
        marginRight:5,
        borderWidth:1,
        borderColor:'#bbbbbb',
        borderRadius:5,
        flex:6,
        justifyContent:'center'
    }
});

var deviceWidth = Dimensions.get('window').width;

class ReplyRow extends Component{
    constructor(props) {
        super(props);
    }
    render()
    {
        var {text,onPress,onChangeText}=this.props;
        return (
                <View style={styles.row} >
                    <View style={styles.textInput}>
                        <TextInput multiline={true} defaultValue = {text} onChangeText={(value)=>onChangeText(value)} placeholder="说点什么吧" style={{ borderWidth: 5,height:56}}>
                        </TextInput>
                    </View>
                    <View style={styles.replyButton}>
                        <BasicButton value="回复" onPress={()=>onPress()}/>
                    </View>
                </View>
        )
    }
}

module.exports=ReplyRow
