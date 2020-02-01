import React from "react";
import "./style.css";

function Card(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img src={props.image} />
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
                    <button typr="submit" onClick={props.handleFormSubmit}
                        className="btn btn-success">
                        Search
                </button>
                </ul>
            </div>
        </div>

    );
}

export default Card;