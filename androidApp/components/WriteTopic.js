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

var NavBar=require('./../components/ToolBar/BasicToolBar')
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
    _getOptionList() {
        return this.refs['OPTIONLIST'];
    }
    componentDidMount() {
        updatePosition(this.refs['SELECT1']);

        updatePosition(this.refs['OPTIONLIST']);
    }
    _canada(province) {
        this.setState({
            canada: province
    });
}
    render() {
        return (
            <View style={{flex:1}}>
                <NavBar text="发布话题" router={this.props.router}>
                </NavBar>
                <Select
                    width={250}
                    ref="SELECT1"
                    optionListRef={this._getOptionList.bind(this)}
                    defaultValue="Select a Province in Canada ..."
                    onSelect={this._canada.bind(this)}>
                    <Option>Alberta</Option>
                    <Option>British Columbia</Option>
                    <Option>Manitoba</Option>
                    <Option>New Brunswick</Option>
                    <Option>Newfoundland and Labrador</Option>
                    <Option>Northwest Territories</Option>
                    <Option>Nova Scotia</Option>
                    <Option>Nunavut</Option>
                    <Option>Ontario</Option>
                    <Option>Prince Edward Island</Option>
                    <Option>Quebec</Option>
                    <Option>Saskatchewan</Option>
                    <Option>Yukon</Option>
                </Select>
                <Text>Selected Canada's province: {this.state.canada}</Text>
                <OptionList ref="OPTIONLIST"/>

                <TextInput placeholder="标题">
                </TextInput>
                <TextInput placeholder="说点什么吧..." multiline={true} style={{height: 40, backroundColor: 'gray', borderWidth: 1}}>
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