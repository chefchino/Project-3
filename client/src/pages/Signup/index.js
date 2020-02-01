import React, {Component} from "react";
import  SignupForm from "../../components/Signupform";
import "./style.css";
import NavTabs from "../../components/NavBar";


class Signup extends Component {
    render() {
        return (
            <div>

                <h1 className="title">ECommerce</h1>
                <SignupForm/>
            </div>
        )
    }
};

export default Signup;

