import React, { Component } from "react";
import LoginForm from "../../components/Login";
import "./stlye.css";
import { Link, Route } from "react-router-dom";
import Signup from "../Signup";
import API from "../../utils/API";

class Login extends Component {
    state = {
        userName: "",
        passWord: ""
    };
    handleLogin = () => {
        if (this.state.userName &&
            this.state.passWord) {
                API.logIn({})
                .then(function(res) {
                    sessionStorage.setItem("Logged In", res.id)
                    window.location.replace("/electronics")
                })
                .catch(err => console.log(err));
            }
    }
    handleInputChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    };
    handleFormSubmit = e => {
        e.preventDefault();
        console.log(this.state.userName, this.state.passWord)
        this.handleLogin();
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

