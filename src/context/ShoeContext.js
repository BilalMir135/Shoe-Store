import React from 'react';
import { DummyData } from './DummyData';

export const shoeContext = React.createContext();
const cart = [];

const ShoeContextProvider = (props) => {
  const addCart = (addShoeId) => {
    if (!cart.length) {
      cart.push(DummyData.find((shoeData) => shoeData.id === addShoeId));
    } else {
      if (!cart.find((shoeData) => shoeData.id === addShoeId))
        cart.push(DummyData.find((shoeData) => shoeData.id === addShoeId));
    }
    console.log(cart);
  };

  const removeCart = () => {
    cart.shift();
  };

  return (
    <shoeContext.Provider value={{ DummyData, cart, addCart, removeCart }}>
      {props.children}
    </shoeContext.Provider>
  );
};

export default ShoeContextProvider;
