import React from "react";
import Details from "../Details"
import "./style.css";
import CartBtn from "../cartBtn";

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
                <CartBtn onClick={() => { props.handleAddToCart(props.id) }} />
                <Details id="BtnDetail"
                    image={props.image}
                    title={props.title}
                    price={props.price}
                    rating={props.rating}
                    description={props.description}
                />
            </footer>

        </div>

    );
}

export default Card;