/**
 * Created by liujia on 2015/11/2.
 */

'use strict'

var React = require('react-native');

var {
    View,
    Component
    }=React

var NavBar=require('./ToolBar/BasicToolBar');
var SimpleRow=require('./SimpleRow');

class About extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{flex:1}}>
                <NavBar text="关于" router={this.props.router}>
                </NavBar>
                <SimpleRow text="检查更新"/>

            </View>

        );
    }
};

module.exports=About