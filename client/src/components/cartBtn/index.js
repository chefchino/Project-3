
import React from "react";
import "./style.css";


class CartBtn extends Component {
  addToCart = () => {
    this.props.onAddToCart(this.props.value);
  }

  render() {
    return (
      <th addToCart={this.addToCart}>
        {this.props.column}
      </th>
    );
  }
}


export default CartBtn;