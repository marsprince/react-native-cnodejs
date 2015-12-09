/**
 * Created by liujia on 2015/11/2.
 */

'use strict'

//var React = require('react-native');
import React,{
    View,
    Component,
    TextInput,
    Text
    }
    from 'react-native';

var NavBar=require('./../components/ToolBar/PublishToolar')
import  {RadioButtonGroup,RadioButton } from 'mrn'
import { connect } from 'react-redux/native';
import { checkToken } from '../actions/UserActions.js';

class WriteTopic extends Component{
    constructor(porps) {
        super(porps);
        this.state = {
            canada: '',
            usa: ''
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
                <View style={{flexDirection:'row'}}>
                     <Text style={{flex:1, justifyContent: 'center'}}>请选择分类</Text>
                     <View  style={{flex:1,flexDirection:'row'}}>
                        <RadioButton value="1" label="分享" checked={true}/>
                        <RadioButton value="2" label="提问"/>
                        <RadioButton value="3" label="分享"/>
                     </View>

                </View>

                <TextInput placeholder="说点什么吧..." multiline={true} style={{height:100}}>
                </TextInput>


            </View>
        );
    }
};

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