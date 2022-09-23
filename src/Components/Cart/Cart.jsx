import React from "react";
import { useContext } from "react";

import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import CartContext from "../../Store/Cart-context";

import "./Cart.css";

function Cart(props) {
  const cartCtx = useContext(CartContext);
  const totalAmount = `₹${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;
  const cartItemRemoveHandler= (id) => {
    cartCtx.removeItem(id);

    
  }
  const cartItemAddHandler= (item) => {
    cartCtx.addItem({...item, amount:1});
  }
  const cartItems = (
    <ul className="cart-items">
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onAdd={cartItemAddHandler.bind(null,item)}
          onRemove={cartItemRemoveHandler.bind(null,item.id)}
        />
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className="total">
        <span>Total amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className="actions">
        <button className="button--alt" onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className="button1">Order</button>}
      </div>
    </Modal>
  );
}

export default Cart;
