import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class SideBarContainer extends Component {
  
  static propTypes = {
  }

  render() {
    return (
      <div>
        <h1>SideBarContainer</h1>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return dispatch;
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBarContainer);

