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

var ViewPagerDots = React.createClass({

  getDefaultProps: function(){
  },

  getInitialState: function(){
    return { activeTab:0 }
  },

  // called from ViewPager
  onPageScroll: function(e){
    this.setState({random:1})
  },

  // called from ViewPager
  onPageSelected: function(e){
    this.setState({activeTab: e.nativeEvent.position});
  },

  // goto(2)
  goToPage: function(page){
    console.log("goToPage", page);
    this.props.viewPager().setPage(page);
    this.setState({activeTab: page});
  },

  renderTab(child, page){
    var isTabActive = this.state.activeTab === page;
    return (
      <TouchableOpacity onPress={() => this.goToPage(page)}>
        <View style={[styles.dot, (isTabActive ? styles.active : styles.inactive)]} />
      </TouchableOpacity>
    )
  },

  render() {
    return (
      <View style={styles.dots} {...this.props}>
        {this.props.children.map((child, i) => this.renderTab(child, i))}
      </View>
    );
  }
});

var styles = StyleSheet.create({
  dots: {
    height:40,
    flex:1,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'center'
  },
  dot: {
    width: 10,
    height: 10,
    marginHorizontal: 3,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#fff"
  },
  active: {
    backgroundColor: "#ccc"
  },
  intactive: {
    backgroundColor: "#fff"
  }
});

module.exports = ViewPagerDots;
