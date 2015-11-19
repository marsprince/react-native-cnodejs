'use-strict'

var React = require('react-native');
var {
    Dimensions
    } = React;

var DimensionsHelper = {
  init : function() {
    this.SCREEN_WIDTH = Dimensions.get("window").width;
    this.SCREEN_HEIGHT = Dimensions.get("window").height;
  }
}
DimensionsHelper.init();
module.exports = DimensionsHelper