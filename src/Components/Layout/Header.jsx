import React from 'react'
import HeaderCartButton from './HeaderCartButton';

import mainImage from '../../Assets/meals.jpg'

import './Header.css'

function Header(props) {
  return (
    <div>
      <header className="header">
        <h1>RahulMeals</h1>
        <HeaderCartButton onClick = {props.onShowCart}/>
      </header>
      <div className="main-image">
        <img src={mainImage} alt="Meals" />
      </div>
    </div>
  );
}

export default Header