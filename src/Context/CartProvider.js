import React, { useState } from "react";
import CartContext from "./CartContext";

const CartProvider = (props) => {
  let name = "Abhishek"
  // let age = 10

   let [cart, setCart] = useState([
     {
       id: 1,
       name: "Iphone",
       quantity: 10,
     },
     {
       id: 2,
       name: "Samsung",
       quantity: 20,
     },
     {
       id: 3,
       name: "Nokia",
       quantity: 30,
     },
   ]);


  return (
    <CartContext.Provider value={
        {
            cart:cart,
            setCart:setCart
        }
    }>

{props.children}
    </CartContext.Provider>
      
   
  );
};

export default CartProvider;

// cartContext = {
//     Provider: Component,
//     Consumer: Component,

// }
