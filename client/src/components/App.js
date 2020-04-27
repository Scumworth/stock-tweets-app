import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import logo from './../logo.svg';
import Header from './Header';
import Footer from './Footer';
import SideBarContainer from './SideBarContainer';
import TweetContainer from './TweetContainer';
import './App.css';

const styles = {
  root: {
    flexGrow: 1,
    height: "100%",
  },
  gridContainer: {
    background: "red",
  }
};

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    fetch('/api/testAPI')
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }))
      .catch(err => err);
  }

  componentDidMount() {
    this.callAPI();
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid 
          className={classes.gridContainer}
          container 
          direction='column'
          spacing={3}
        >
          <Grid item>
            <SideBarContainer /> 
          </Grid>
          <Grid item>
            <Header />
          </Grid>
          <Grid item>
            <TweetContainer />
          </Grid>
          <Grid item>
            <Footer />
          </Grid>
        </Grid>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return { dispatch }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(App));
