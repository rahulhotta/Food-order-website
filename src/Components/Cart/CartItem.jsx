import  './CartItem.css';

const CartItem = (props) => {
  const price = `₹${props.price.toFixed(2)}`;

  return (
    <li className="cart-item">
      <div>
        <h2>{props.name}</h2>
        <div className="cart-item__summery">
          <span className="cart-item__price">{price}</span>
          <span className="cart-item__amount">x {props.amount}</span>
        </div>
      </div>
      <div className="cart-item__actions">
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
