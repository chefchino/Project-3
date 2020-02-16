import React from "react";
import "./style.css";
import {CardFooter} from "reactstrap";
// import Electronics from "../../pages/Cart";

function Card(props) {
    return (
        <div className="card">
            <div className="img-container" style={{ backgroundImage: `url(${props.image})`, backgroundRepeat: `no-repeat`, backgroundSize: `contain`, }}
            />
            <div className="content">
                <ul>
                    <li id="titleInfo">
                        <strong>{props.title}</strong>
                    </li>
                    <li>
                        <strong>{props.rating}</strong>
                    </li>
                    <li>
                        <strong>{props.price}</strong>
                    </li>
                    <CardFooter className="text-muted">
                    {/* <footer> */}
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
                {/* </footer> */}
                    </CardFooter>
                </ul>
            </div>
        </div>

    );
}

export default Card;