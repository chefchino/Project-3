import React from "react";
import "./style.css";

function Card(props) {
    return (
        <div className="card">
            <div className="img-container" style={{ backgroundImage: `url(${props.image})`, backgroundRepeat: `no-repeat`, backgroundPosition: `center`, backgroundSize: `contain`, }}
            />
            <div className="content">
                <ul>
                    <li id="titleInfo">
                        <strong>{props.title}</strong>
                    </li>
                    <li>
                        <strong>Rating: {props.rating}</strong>
                    </li>
                    <li>
                        <strong>${props.price}</strong>
                    </li>
                </ul>
            </div>
                    <hr></hr>
                    <footer>
                    <button type="cart-btn" onClick={()=>{props.handleAddToCart(props.id)}} 
                    
                    
                    className="btn btn-success" id="BtnCart">
                        Add to Cart
                </button>
                    <button type="submit" onClick={()=>{
                        console.log("you clicked me");
                    }}
                    className="btn btn-success" id="BtnDetail">
                        Details
                </button>
                </footer>
        </div>

    );
}

export default Card;