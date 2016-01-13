/**
 * Created by liujia on 2015/11/2.
 */

'use strict'

//var React = require('react-native');
import React,{
    View,
    Component,
    TextInput,
    Text,
    StyleSheet,
    ToastAndroid
    }
    from 'react-native';

var dismissKeyboard = require('dismissKeyboard');
var NavBar=require('./../components/ToolBar/PublishToolBar')
import  {RadioButtonGroup,RadioButton,Button } from 'react-native-material-design'
import {getCategory} from '../util/cnodeUtil.js'
import {alertLogin} from './../components/alertModule/alertLogin'

class WriteTopic extends Component{
    constructor(porps) {
        super(porps);
        this.state = {
            label:['ask','share','job'],
            selectedLabel:0,
            writeDisabled:true,
            title:"",
            content:""
        };
    }

    componentDidMount() {

    }
    componentDidUpdate(){
        if(this.props.state.topicState.publishSuccess)
        {
            ToastAndroid.show("发布成功！",ToastAndroid.SHORT)
            dismissKeyboard();
        }
    }
    _titleOnChangeText(value){
        this.setState({
            title:value,
            writeDisabled:(value && this.state.content)?false:true
        })
    }
    _contentOnChangeText(value){
        this.setState({
            content:value,
            writeDisabled:(value && this.state.title)?false:true
        })
    }

    _publishButtonPress(){
        if(this.props.state.userState.isLogin)
        {
            const {title,content,selectedLabel}=this.state
            const tab=this.state.label[selectedLabel]
            this.props.actions.publish(title,tab,content,this.props.state.userState.accesstoken)
        }
        else{
            alertLogin(this.props.router)
        }
    }

    render() {
        return (
            <View style={{flex:1}}>
                <NavBar text="发布话题" router={this.props.router} disabled={this.state.writeDisabled} onPress={this._publishButtonPress.bind(this)}>
                </NavBar>
                <TextInput placeholder="标题" onChangeText={(value)=>this._titleOnChangeText(value)}>
                </TextInput>
                <View style={{flexDirection:'row',justifyContent: 'center'}}>
                    <View style={{flex:1,paddingTop:18,paddingLeft:5}}>
                        <Text style={styles.text}>请选择分类</Text>
                    </View>
                     <View style={{flex:4,flexDirection:'row'}}>
                         {this.state.label.map((value,index)=>{
                             return(
                                 <View key={index} style={{flex:1,flexDirection:'row'}}>
                                     <View style={{flex:3}}>
                                         <RadioButton value={index.toString()}
                                                      checked={index==this.state.selectedLabel?true:false}
                                                      onSelect={index=>this.setState({selectedLabel:index})}/>
                                     </View>
                                     <Text style={{flex:2,marginTop:18,paddingLeft:15}}>
                                         {getCategory(value)}
                                     </Text>

                                 </View>
                             )
                         })}
                     </View>
                </View>
                <View style={styles.textInput}>
                    <TextInput placeholder="说点什么吧..." multiline={true} onChangeText={(value)=>this._contentOnChangeText(value)}>
                    </TextInput>
                </View>

            </View>
        );
    }
};

var styles = StyleSheet.create({
    text:{
        textAlign:'center',
        fontSize: 14,
        lineHeight: 20,
    },
    textInput:{
        //borderWidth:1,
        //borderColor:'blue'
    }
});

module.exports=WriteTopic