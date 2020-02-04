import React from "react";
import "./style.css";

function Details(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img src={props.image} alt="img" />
            </div>
            <div className="content">
                <h1>{props.title}</h1>
                <h3>{props.price}</h3>
                <h4 className="ratings">{props.rating}</h4>
                <h4>Description</h4>
                <p>{props.description}</p>

            </div>
        </div>

    );
}

export default Details;