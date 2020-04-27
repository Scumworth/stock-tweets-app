import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import StockSearch from './StockSearch';

class SideBarContainer extends Component {
  
  static propTypes = {
  }

  render() {
    return (
      <div>
        <StockSearch />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(SideBarContainer);

