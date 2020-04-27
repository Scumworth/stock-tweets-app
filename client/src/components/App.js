import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import logo from './../logo.svg';
import Header from './Header';
import Footer from './Footer';
import SideBarContainer from './SideBarContainer';
import TweetContainer from './TweetContainer';
import './App.css';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    height: "100%",
  },
  gridContainer: {
    background: "red",
  }
});

export default function App() {
  const classes = useStyles();
  const dispatch = useDispatch();
  
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



