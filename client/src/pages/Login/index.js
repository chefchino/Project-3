import React, {Component} from "react";
import  LoginForm from "../../components/Login";
import "./stlye.css";
import NavTabs from "../../components/NavBar";


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

