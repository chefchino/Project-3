import React, { Component } from "react";
import LoginForm from "../../components/Login";
import "./stlye.css";
import API from "../../utils/API";
import { Link, Route } from "react-router-dom";
import Signup from "../Signup";

class Login extends Component {
    state = {
        userLogin: "",
        passwordLogin: ""
    };
    handleInputChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    };
    handleFormSubmit = e => {
        e.preventDefault();
        console.log(this.state.userLogin, this.state.passwordLogin)
        // API.logIn(this.state.username, this.state.password)
        //     .then(res => {
        // console.log(res)
        // })

    }
    render() {
        return (
            <div>
                <Link to="/signup" role="button" className="btn btn-link">
                    SignUp
      </Link>{" "}
                <Route exact path="/signup" component={Signup} />
                <h1 className="title">ECommerce</h1>
                <LoginForm
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                />
            </div>
        )
    }
};

export default Login;

