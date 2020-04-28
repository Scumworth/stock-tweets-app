import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  }
});

export default function TweetContainer() {
  
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Grid container>
      <Grid item xs>
      </Grid>
      <Grid item xs>
      </Grid>
    </Grid>
  );
}


