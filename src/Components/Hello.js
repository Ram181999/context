import React,{useContext} from "react";
import CartContext from "../Context/CartContext";

const Hello =(props)=>{

    const {cart,setCart}=useContext(CartContext);
    console.log(cart)

    return (
      <div style={{ border: "2px solid green" }}>
        <h1>Hello world </h1>
        <p>iam a developer</p>
        {props.children}
      </div>
    );
}


export default Hello;