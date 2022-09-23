import React, {useContext} from 'react'
import MealItemForm from './MealItemForm'
import CartContext from '../../../Store/Cart-context'

import './MealItem.css'

function MealItem(props) {

 const cartCtx =  useContext(CartContext);

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    })
  }
    const price = `₹${props.price.toFixed(2)}`
  return (
    <div className='meal'>
        <div>
            <h3>{props.name}</h3>
            <div className='description'>{props.description}</div>
            <div className='price'>{price}</div>
        </div>
        <div>
            <MealItemForm id={props.id} onAddToCart={addToCartHandler}/>
        </div>
    </div>
  )
}

export default MealItem