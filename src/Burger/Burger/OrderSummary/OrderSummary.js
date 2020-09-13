import React from "react";
import Aux from "../../../HOC/Aux";
import NewB from "../../../Components/UI/Button/NewB";
const OrderSummary = (props) => {
  const ingredienSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}> {igKey}</span>:
        {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients</p>
      <ul>{ingredienSummary}</ul>
      <p>
        <strong>Total Price:{props.price.toFixed(2)}</strong>
      </p>
      <p>Continue to Checkout?</p>

      <NewB btnType="Danger" clicked={props.purchaseCancelHandler}>
        CANCEL
      </NewB>
      <NewB btnType="Success" clicked={props.purchaseContinueHandler}>
        CONTINUE
      </NewB>
    </Aux>
  );
};

export default OrderSummary;
