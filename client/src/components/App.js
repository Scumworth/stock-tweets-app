import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';
import logo from './../logo.svg';

import Footer from './Footer';
import TweetContainer from './TweetContainer';
import StockAppBar from './StockAppBar';

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
      <StockAppBar />
      <TweetContainer />
      <Footer />
    </div>
  );
}



