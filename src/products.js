import React, { Fragment } from "react";
import ForSportingGoods from "./sports";
import ForElectronics from "./electronics";

class Products extends React.Component {
  seperateCategoryWise() {
    var allOfThem = this.props.product;
    var sportingGoods = [];
    var electronics = [];
    for (let i = 0; i < allOfThem.length; i++) {
      if (allOfThem[i].category === "Sporting Goods") {
        sportingGoods.push(allOfThem[i]);
      } else {
        electronics.push(allOfThem[i]);
      }
    }
    return {
      sportingGoods,
      electronics
    };
  }

  render() {
    var { sportingGoods, electronics } = this.seperateCategoryWise();
    return (
      <Fragment>
        <ForSportingGoods
          enteredText={this.props.enteredText}
          checkedOrNot={this.props.checkedOrNot}
          product={sportingGoods}
        />
        <br />
        <ForElectronics
          enteredText={this.props.enteredText}
          checkedOrNot={this.props.checkedOrNot}
          product={electronics}
        />
      </Fragment>
    );
  }
}

export default Products;
