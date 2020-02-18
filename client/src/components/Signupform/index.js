import React from "react";
import "./style.css";

function SignupForm(props) {
    return (
        
        <form className="sigup-form">
            <div className="form">
            <label htmlFor="username">Username:</label>
            <input
            value={props.userName}
            onChange={props.handleInputChange}
            name="userName"
            type="text"
            className="form-control"
            placholder="userName"
            id="username"
            />
            <label htmlFor="password">Password:</label>
            <input
            value={props.passWord}
            onChange={props.handleInputChange}
            name="passWord"
            type="password"
            className="form-control"
            placholder="Password"
            id="password"
            />
            <h2>Name</h2>
            <label htmlFor="firstname">First Name:</label>
                <input
                value={props.firstName}
                onChange={props.handleInputChange}
                name="firstName"
                type="text"
                className="form-control"
                placholder="First Name"
                id="firstname"
                />
                <label htmlFor="lastname">Last Name:</label>
                <input
                value={props.lastName}
                onChange={props.handleInputChange}
                name="lastName"
                type="text"
                className="form-control"
                placholder="Last Name"
                id="lastname"
                />
                <label htmlFor="email">Email:</label>
                <input
                value={props.email}
                onChange={props.handleInputChange}
                name="email"
                type="email"
                className="form-control"
                placholder="Email"
                id="email"
                />
                <h2>Address</h2>
                <div className="address">
                <label htmlFor="street">Street:</label>
                <input
                value={props.street}
                onChange={props.handleInputChange}
                name="street"
                type="text"
                className="form-control"
                placholder="Street"
                id="street"
                />
                <label htmlFor="city">City:</label>
                <input
                value={props.city}
                onChange={props.handleInputChange}
                name="city"
                type="text"
                className="form-control"
                placholder="City"
                id="city"
                />
                <label htmlFor="state">State:</label>
                <input
                value={props.state}
                onChange={props.handleInputChange}
                name="state"
                type="text"
                className="form-control"
                placholder="State"
                id="state"
                />
                <label htmlFor="zipcode">Zipcode:</label>
                <input
                value={props.zipcode}
                onChange={props.handleInputChange}
                name="zipcode"
                type="text"
                className="form-control"
                placholder="Zipcode"
                id="zipcode"
                />
                </div>
                <button typr="submit" onClick={props.handleFormSubmit}
                className="btn btn-success">
                    Create
                </button>
            </div>
        </form>
    );
}

export default SignupForm;
