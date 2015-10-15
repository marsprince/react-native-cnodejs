'use strict';

import React, { Component } from 'react-native';
import {bindActionCreators} from 'redux';
import * as cnodeActions from '../actions/drawerActions.js';
import { connect } from 'react-redux/native';

var DrawerLayout=require('../components/DrawerLayout');
var Toolbar=require('../components/Toolbar');
var ScrollView=require('../components/ScrollableTabView')

class HomePage extends Component{
  constructor(props) {
    super(props);
  }
  render()
  {
    const { root,dispatch } = this.props;
    const actions = bindActionCreators(cnodeActions, dispatch);
    return (
        <DrawerLayout actions={actions} state={root}>
        </DrawerLayout>
    )
  }
}

function mapStateToProps(state) {
  return {
    root: state
  };
}
export default connect(mapStateToProps)(HomePage);
