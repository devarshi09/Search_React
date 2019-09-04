import React from "react";

const ForSportingGoods = props => {
  var sportingGoods = props.product;
  var flag = false;
  var show = [];
  show.push(<div class="container">Sporting Goods</div>);
  for (var i = 0; i < sportingGoods.length; i++) {
    if (sportingGoods[i].name.indexOf(props.enteredText) === -1) continue;
    if (!sportingGoods[i].stocked && props.checkedOrNot) continue;
    if (flag === false) {
      flag = true;
    }
    if (sportingGoods[i].stocked) {
      show.push(
        <tr>
          <th scope="row">{i + 1}</th>
          <td>{sportingGoods[i].name}</td>
          <td>{sportingGoods[i].price}</td>
        </tr>
      );
    } else {
      show.push(
        <tr>
          <th scope="row">{i + 1}</th>
          <td style={{ color: "red" }}>{sportingGoods[i].name}</td>
          <td>{sportingGoods[i].price}</td>
        </tr>
      );
    }
  }
  return <div>{show}</div>;
};

export default ForSportingGoods;
