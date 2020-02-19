import React from "react";
import "./style.css";

function CartBtn(props) {
  return (
    <span className="btn btn-success" id="BtnCart"{...props} role="button" tabIndex="0">
      AddToCart
    </span>
  );
}

export default CartBtn;
