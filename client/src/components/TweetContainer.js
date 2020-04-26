import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class TweetContainer extends Component {

  static propTypes = {
  }

  render() {
    return (
      <div>
        <h1>TweetContainer</h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(TweetContainer);
