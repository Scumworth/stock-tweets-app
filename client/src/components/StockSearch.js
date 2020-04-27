import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    background: 'blue',
    height: '75px'
  },
});

const StockSearch = () => (
  <div>
    <TextField 
      height="10%"
      id='outlined-basic' 
      label='Stock' 
      variant='outlined'
    />
  </div>
);

export default StockSearch;
