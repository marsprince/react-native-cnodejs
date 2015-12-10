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
    StyleSheet
    }
    from 'react-native';

var NavBar=require('./../components/ToolBar/PublishToolar')
import  {RadioButtonGroup,RadioButton } from 'mrn'
import { connect } from 'react-redux/native';
import { checkToken } from '../actions/UserActions.js';
import {getCategory} from '../util/cnodeUtil.js'

class WriteTopic extends Component{
    constructor(porps) {
        super(porps);
        this.state = {
            label:['ask','share','job'],
            selectedLabel:0
        };
    }

    componentDidMount() {

    }
    render() {
        return (
            <View style={{flex:1}}>
                <NavBar text="发布话题" router={this.props.router}>
                </NavBar>
                <TextInput placeholder="标题">
                </TextInput>
                <View style={{flexDirection:'row',justifyContent: 'center'}}>
                    <View style={{flex:1,paddingTop:18,paddingLeft:5}}>
                        <Text style={styles.text}>请选择分类</Text>
                    </View>
                     <View style={{flex:4,flexDirection:'row'}}>
                         {this.state.label.map((value,index)=>{
                             return(
                                 <View style={{flex:1,flexDirection:'row'}}>
                                     <View style={{flex:3}}>
                                         <RadioButton value={index}
                                                      checked={index==this.state.selectedLabel?true:false}
                                                      onCheck={index=>this.setState({selectedLabel:index})}/>
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
                    <TextInput placeholder="说点什么吧..." multiline={true} >
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

function mapStateToProps(state) {
    return {
        user: state.user
    };
}

function mapDispatchToProps(dispatch) {
    return {
        checkToken: () => dispatch(checkToken())
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WriteTopic);

module.exports=WriteTopic