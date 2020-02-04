import React from "react";
import "./style.css";

function Card(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img src={props.image} alt="img" />
            </div>
            <div className="content">
                <ul>
                    <li>
                        <strong>{props.title}</strong>
                    </li>
                    <li>
                        <strong>{props.rating}</strong>
                    </li>
                    <li>
                        <strong>{props.price}</strong>
                    </li>
                    <button type="submit" onClick={props.handleFormCart}
                        className="btn btn-success">
                        Cart
                </button>
                    <button type="submit" onClick={props.handleDetail}
                        className="btn btn-success">
                        Details
                </button>
                </ul>
            </div>
        </div>

    );
}

export default Card;