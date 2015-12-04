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

var BarcodeScanner = require('../components/BarCodeModule/BarCode');
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
       this.props.actions.checkToken(e.data)
       this.props.router.pop()
    }

    render() {
        return (
            <View style={{flex:1}}>
                <NavBar text="扫描二维码" router={this.props.router}>
                </NavBar>
                <BarcodeScanner
                    onBarCodeRead={this._barcodeReceived.bind(this)}
                    style={{ flex: 1 }}
                    torchMode={this.state.torchMode}
                    cameraType={this.state.cameraType}
                    />

            </View>

        );
    }
};

module.exports=BarCode