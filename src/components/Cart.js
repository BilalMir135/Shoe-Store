import React, { useContext } from 'react';
import Layout from './Layout';
import ShoeCart from './ShoeCart';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { shoeContext } from '../context/ShoeContext';

const useStyles = makeStyles({
  amount: {
    fontWeight: 600,
    color: '#d61f16',
    margin: 10,
  },
});

const Cart = () => {
  const classes = useStyles();
  const { cart } = useContext(shoeContext);
  return (
    <Layout>
      {cart.map((shoeData) => (
        <ShoeCart key={shoeData.id} data={shoeData} />
      ))}
      <Typography variant='h5' className={classes.amount}>
        Total Amount : $200
      </Typography>
    </Layout>
  );
};

export default Cart;
