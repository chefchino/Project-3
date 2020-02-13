
import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
// function CartBtn(props) {
//   return (
//     <button  type="submit" disabled={props.inCart ? true : false}
//     onClick={() => { console.log("added to cart") }}
//     className="btn btn-success">
//     {props.inCart ? (<p className="mb=0" disabled>{" "}Carted</p>) : (<p className="mb=0" disabled>{" "} Want This?</p>)}
// </button>
//   )
// }


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