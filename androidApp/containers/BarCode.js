/**
 * Created by mars on 2015/11/20.
 */

'use strict'

//var React = require('react-native');
import React,{
    View,
    Component
    }
    from 'react-native';

var BarcodeScanner = require('../components/BarCode/BarCode');
var NavBar=require('./../components/ToolBar/BasicToolBar')

import { connect } from 'react-redux/native';
import { checkToken } from '../actions/UserActions.js';

class BarCode extends Component{
    constructor(porps) {
        super(porps);
        this.state={
            torchMode: 'off',
            cameraType: 'back',
        }
    }

    _barcodeReceived(e) {
       this.props.checkToken(e.data).then(data=>{
            this.props.router.pop()
        })
    }

    render() {
        return (
            <View style={{flex:1}}>
                <NavBar text="扫描二维码" router={this.props.router}>
                </NavBar>
                <BarcodeScanner
                    onBarCodeRead={this._barcodeReceived}
                    style={{ flex: 1 }}
                    torchMode={this.state.torchMode}
                    cameraType={this.state.cameraType}
                    />

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
)(BarCode);

module.exports=BarCode