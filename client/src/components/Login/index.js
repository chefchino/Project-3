import React from "react";
import "./style.css";

function LoginForm(props) {
    return (
        <form className="login-form">
            <div className="form-group">
                <label htmlFor="Username">UserName:</label>
                <input
                    value={props.username}
                    onChange={props.handleInputChange}
                    name="username"
                    type="text"
                    className="form-control"
                    placeholder="UserName"
                    id="userLogin"
                />
                <input
                    value={props.password}
                    onChange={props.handleInputChange}
                    name="password"
                    type="password"
                    className="form-control"
                    placeholder="password"
                    id="passwordLogin"
                />
                <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
                    Login
        </button>
            </div>
        </form>
    );
}

export default LoginForm;