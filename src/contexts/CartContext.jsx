import React from "react";
import { createContext, useState, useEffect } from "react";

export const Cartcontext = createContext();
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [itemSmount, setItmeAmount] = useState(0)



  const addTocart = (product, id) => {
    const newItem = { ...product, amount: 1 };


    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const increaseAmount = (id) => {
    const increase = cart.find((item) => item.id === id)
    addTocart(increase, id)
  };

  const decreaseAmount = (id) => {
    const cartItems = cart.find((item) => {
      return item.id === id;
    });
    if (cartItems) {
      const newCarts = cart.map((item) => {
        if (item.id === id) {

          return { ...item, amount: cartItems.amount - 1 };
        } else {
          return item;
        }
      });
      setCart(newCarts);
    }
    if (cartItems.amount < 2) {

      removeFromCart(id);
      //console.log(cartItems.amount)
    }

  };




  // console.log(cart)
  return (
    <Cartcontext.Provider
      value={{ cart, addTocart, removeFromCart, clearCart, increaseAmount, decreaseAmount,itemSmount }}
    >
      {children}
    </Cartcontext.Provider>
  );
};

export default CartProvider;
