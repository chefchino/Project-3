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
                    <button type="cart-btn" 
                    onClick={()=> {props.handleAddToCart(props.id)}} 
                    
                    className="btn btn-success">
                        Add to Cart
                </button>
                    <button type="submit" onClick={()=>{props.handleDetail(props.id)
                        console.log("you clicked me");
                    }}
                        className="btn btn-success">
                        Details
                </button>
                </ul>
            </div>
        </div>

    );
}

export default Card;