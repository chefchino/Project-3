import React, {Component} from "react";
import  LoginForm from "../../components/Login";
import "./stlye.css";

class Login extends Component {
    render() {
        return (
            <div>

                <h1 className="title">ECommerce</h1>
                <LoginForm/>
            </div>
        )
    }
};

export default Login;

