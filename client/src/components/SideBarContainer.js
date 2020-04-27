import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import StockSearch from './StockSearch';

const useStyles = makeStyles({
});

export default function SideBarContainer() {

  return (
    <div>
      <StockSearch />
    </div>
  )
}



