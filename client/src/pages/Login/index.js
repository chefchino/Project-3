import React, { Component } from "react";
import LoginForm from "../../components/Login";
import "./style.css";
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
            this.state.passWord
            ) {
                API.logIn({
                userName: this.state.userName,
                passWord: this.state.passWord
            })
            .then(function(res) {
                console.log({res})
                    sessionStorage.setItem("Logged In", res.data._id)
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
    handleLoginSubmit = e => {
        e.preventDefault();
        this.handleLogin();
        // API.logIn(this.state.username, this.state.password)
        //     .then(res => {
        // console.log(res)
        // })

    }
    render() {
        return (
            <div>
                {/* <Link to="/signup" role="button" className="btn btn-link">
                    SignUp
      </Link>{" "}
                <Route exact path="/signup" component={Signup} /> */}
                {/* <h1 className="title">Login</h1> */}
                <LoginForm
                    handleLoginSubmit={this.handleLoginSubmit}
                    handleInputChange={this.handleInputChange}
                />
                 <Link to="/signup" role="button" className="btn btn-link">
                   click to SIGN UP!
      </Link>{" "}
                <Route exact path="/signup" component={Signup} />
            </div>
        )
    }
};

export default Login;

