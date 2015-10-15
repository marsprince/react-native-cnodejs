'use strict';

import React, { Component } from 'react-native';
import {bindActionCreators} from 'redux';
import Counter from '../components/counter';
import * as counterActions from '../actions/counterActions';
import { connect } from 'react-redux/native';

function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(counterActions, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
