import React from "react";
import "./Burger.css";
import BurgerIngridient from "./Burger/BurgerIngridient/BurgerIngridient";
const Burger = (props) => {
  //creating object into an string array
  let transformedingredients = Object.keys(props.ingredients)
    .map((igKey) => {
      //execute as per ingrdient amount likr cheese 2 meat 2
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngridient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  if (transformedingredients.length === 0) {
    transformedingredients = <p>Please start adding ingrdients!!</p>;
  }
  console.log(transformedingredients);
  return (
    <div className="Burger">
      <BurgerIngridient type="bread-top" />
      {transformedingredients}
      <BurgerIngridient type="bread-bottom" />
    </div>
  );
};

export default Burger;
