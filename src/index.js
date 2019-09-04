import React from "react";
import ReactDOM from "react-dom";
import Products from "./products";

class App extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      name: "",
      checked: false,
      products: prop.PRODUCTS
    };
  }
  forSearch = event => {
    this.setState({
      name: event.target.value
    });
  };
  forCheckBox = event => {
    this.setState({
      checked: event.target.checked
    });
  };
  render() {
    return (
      <div>
        <form>
          Enter the Name of the Product :
          <input
            type="text"
            value={this.state.name}
            onChange={this.forSearch}
          />
          <br />
          Exclude Out of Stock Items{" "}
          <input
            type="checkbox"
            value={this.state.checked}
            onChange={this.forCheckBox}
          />
        </form>

        <table className="table table-dark">
          <div>
            <span style={{ padding: "10px" }}>#</span>
            <span style={{ padding: "10px" }}>Product Name</span>
            <span>Price</span>
          </div>
          <tbody>
            <Products
              enteredText={this.state.name}
              checkedOrNot={this.state.checked}
              product={this.state.products}
            />
          </tbody>
        </table>
      </div>
    );
  }
}

var PRODUCTS = [
  {
    category: "Sporting Goods",
    price: "$49.99",
    stocked: true,
    name: "Football"
  },
  {
    category: "Sporting Goods",
    price: "$9.99",
    stocked: true,
    name: "Baseball"
  },
  {
    category: "Sporting Goods",
    price: "$29.99",
    stocked: false,
    name: "Basketball"
  },
  {
    category: "Electronics",
    price: "$99.99",
    stocked: true,
    name: "iPod Touch"
  },
  {
    category: "Electronics",
    price: "$399.99",
    stocked: false,
    name: "iPhone 5"
  },
  { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
];

ReactDOM.render(<App PRODUCTS={PRODUCTS} />, document.querySelector("#root"));
