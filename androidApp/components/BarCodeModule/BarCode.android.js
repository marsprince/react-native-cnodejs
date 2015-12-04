/**
 * Created by mars on 2015/11/20.
 */
'use strict';

var React = require('react-native');
var {
    Component
    } = React;

var BarCodeNative=require("react-native-barcodescanner")

class BarCode extends Component {

    render() {
        return (
            <BarCodeNative {...this.props}>

            </BarCodeNative>
        );
    }
}

module.exports = BarCode;