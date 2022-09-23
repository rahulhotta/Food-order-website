import React, { useRef } from "react";
import Input from "../../UI/Input";

import "./MealItemForm.css";
function MealItemForm(props) {
  
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      return;
    }
    props.onAddToCart(enteredAmountNumber);
  };

  const amountInputRef = useRef();
  return (
    <form className="form" onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      
    </form>
  );
}

export default MealItemForm;
