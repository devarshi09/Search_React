import React from "react";

const ForElectronics = props => {
  var electronics = props.product;
  var flag = false;
  var show = [];
  for (var i = 0; i < electronics.length; i++) {
    if (electronics[i].name.indexOf(props.enteredText) === -1) continue;
    if (!electronics[i].stocked && props.checkedOrNot) continue;
    if (flag === false) {
      flag = true;
      show.push(<div class="container">Electronics</div>);
    }
    if (electronics[i].stocked) {
      show.push(
        <tr>
          <th scope="row">{i + 1}</th>
          <td>{electronics[i].name}</td>
          <td>{electronics[i].price}</td>
        </tr>
      );
    } else {
      show.push(
        <tr>
          <th scope="row">{i + 1}</th>
          <td style={{ color: "red" }}>{electronics[i].name}</td>
          <td>{electronics[i].price}</td>
        </tr>
      );
    }
  }
  return <div>{show}</div>;
};

export default ForElectronics;
