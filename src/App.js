import React, { Component } from "react";
import Layout from "./Components/Layout/Layout";
import BurgerBuilder from "./Container/BuilderBurger/BuilderBurger";
import BuilderBurger from "./Container/BuilderBurger/BuilderBurger";
export default class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <BuilderBurger />
        </Layout>
      </div>
    );
  }
}
