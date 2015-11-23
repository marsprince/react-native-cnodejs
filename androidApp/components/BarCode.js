/**
 * Created by mars on 2015/11/20.
 */

'use strict'

var React = require('react-native');

var {
    View,
    }=React

var BarcodeScanner = require('./barcode/barCode');
var NavBar=require('./NavigationTitleBar')
var UserService=require('../services/UserService')

var Barcode = React.createClass({
    getInitialState() {
        return ({
            torchMode: 'off',
            cameraType: 'back',
        });
    },

    barcodeReceived(e) {
        UserService.req.checkToken(e.data)
    },

    render() {
        return (
            <View style={{flex:1}}>
                <NavBar text="扫描二维码">
                </NavBar>
                <BarcodeScanner
                    onBarCodeRead={this.barcodeReceived}
                    style={{ flex: 1 }}
                    torchMode={this.state.torchMode}
                    cameraType={this.state.cameraType}
                    />

            </View>

        );
    }
});

module.exports=Barcode