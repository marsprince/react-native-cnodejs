'use strict';

var React = require('react-native');
var {
  View,
  Text,
  ViewPagerAndroid,
  StyleSheet,
  TouchableOpacity
} = React;
var DimensionsHelper = require("./DimensionsHelper");

var ViewPagerTabs = React.createClass({

  getDefaultProps: function(){
  },

  getInitialState: function(){
    return {
      activeTab:0,
      left: 0
    }
  },

  moveActiveLine:function(e){
    var width = DimensionsHelper.SCREEN_WIDTH
    var tabWidth = width / this.props.children.length;
    var left = (tabWidth * (e.nativeEvent.offset || 0)) + (tabWidth * e.nativeEvent.position);
    if(!e.nativeEvent.position || left) this.setState({left: left});
  },

  // called from ViewPager
  onPageScroll: function(e){
    this.moveActiveLine(e);
  },

  // called from ViewPager
  onPageSelected: function(e){
    // this.moveActiveLine(e);
    this.setState({activeTab: e.nativeEvent.position});
  },

  // goto(2)
 /* goToPage: function(page){
    this.props.viewPager().setPage(page);
    this.setState({activeTab: page});
  },*/

  renderTab(child, page){
    var isTabActive = this.state.activeTab === page;
    var textStyle = {
      color: isTabActive ? '#666' : '#999',
      fontWeight: isTabActive ? 'bold' : 'normal',
      flex:1
    }
    return (
      <TouchableOpacity
          key={page}
        style={[
          styles.tab,
          {width: DimensionsHelper.SCREEN_WIDTH/this.props.children.length}]}
        onPress={() => this.props.goToPage(page)}>
        <View style={{flex:1}}>
          <Text style={textStyle}>{child.props.tabLabel}</Text>
        </View>
      </TouchableOpacity>
    )
  },

  render() {
    return (
      <View style={styles.tabs} {...this.props}>
        {this.props.children.map((child, i) => this.renderTab(child, i))}
        <View
          ref={(comp) => {this.activeLine = comp}}
          style={[styles.activeLine, {left: this.state.left, width: DimensionsHelper.SCREEN_WIDTH/this.props.children.length}]} />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  tabs:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#eee',
    backgroundColor:'2C2C2C'
  },
  tab:{
    height: 35,
    paddingBottom: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  activeLine:{
    height: 4,
    backgroundColor: '#999',
    position:'absolute',
    top: 32,
    left: 0
  }
})

module.exports = ViewPagerTabs;
