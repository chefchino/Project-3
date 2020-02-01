import React from "react";
import "./style.css";

function SignupForm(props) {
    return (
        <form className="sigup-form">
            <div className="form">
                <input
                value={props.firstName}
                onChange={props.handleInputChange}
                name="firstName"
                type="text"
                className="form-control"
                placholder="First Name"
                id="firstname"
                />
                <input
                value={props.lastName}
                onChange={props.handleInputChange}
                name="lastName"
                type="text"
                className="form-control"
                placholder="Last Name"
                id="lastname"
                />
                <input
                value={props.password}
                onChange={props.handleInputChange}
                name="password"
                type="password"
                className="form-control"
                placholder="Password"
                id="password"
                />
                <input
                value={props.username}
                onChange={props.handleInputChange}
                name="username"
                type="text"
                className="form-control"
                placholder="userName"
                id="username"
                />
                <input
                value={props.address}
                onChange={props.handleInputChange}
                name="address"
                type="text"
                className="form-control"
                placholder="Address"
                id="address"
                />
                <input
                value={props.email}
                onChange={props.handleInputChange}
                name="email"
                type="email"
                className="form-control"
                placholder="Email"
                id="email"
                />
                <button typr="submit" onClick={props.handleFormSubmit}
                className="btn btn-success">
                    Search
                </button>
            </div>
        </form>
    );
}

export default SignupForm;
