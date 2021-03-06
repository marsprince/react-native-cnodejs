'use strict';

import React, { Component } from 'react-native';
import {bindActionCreators} from 'redux';
import * as cnodeActions from '../actions/index.js';
import { connect } from 'react-redux/native';

var Navitation=require('./Navitation');

class HomePage extends Component{
  constructor(props) {
    super(props);
  }
  render()
  {
    const {state,dispatch } = this.props;
    const actions = bindActionCreators(cnodeActions, dispatch);
    return (
        <Navitation actions={actions} state={state}>
        </Navitation>
    )
  }
}

function mapStateToProps(state) {
  return {
    state: state
  };
}
export default connect(mapStateToProps)(HomePage);
