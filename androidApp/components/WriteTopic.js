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
const DropDown = require('react-native-dropdown');
const {
    Select,
    Option,
    OptionList,
    updatePosition
    } = DropDown;
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
                <Text>选择</Text>
                <TextInput placeholder="说点什么吧..." multiline={true}
                           style={{height: 40, backroundColor: 'gray', borderWidth: 1}}>
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