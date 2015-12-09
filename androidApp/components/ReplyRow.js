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
    } = React;
import {Button} from 'mrn'
var styles = StyleSheet.create({
    row:{
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 8,
        flex:1,
        flexDirection:'row'
    },
});

class ReplyRow extends Component{
    constructor(props) {
        super(props);
    }
    render()
    {
        var {text,onPress}=this.props;
        return (
                <View style={styles.row} >
                    <View style={{flex:6}}>
                        <TextInput defaultValue = {text} placeholder="说点什么吧">
                        </TextInput>
                    </View>
                    <View style={{flex:1}}>
                        <Button value="发布"  primary={'googleBlue'}/>
                    </View>
                </View>
        )
    }
}

module.exports=ReplyRow
