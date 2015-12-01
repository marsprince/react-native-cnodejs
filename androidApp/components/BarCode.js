/**
 * Created by mars on 2015/11/20.
 */

'use strict'

var React = require('react-native');

var {
    View,
    Component
    }=React

var BarcodeScanner = require('./BarCode/BarCode');
var NavBar=require('./ToolBar/BasicToolBar')
var UserService=require('../services/UserService')

class BarCode extends Component{
    constructor(porps) {
        super(porps);
        this.state={
            torchMode: 'off',
            cameraType: 'back',
        }
    }

    _barcodeReceived(e) {
        UserService.req.checkToken(e.data).then(data=>{
            console.log(data)
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

module.exports=BarCode