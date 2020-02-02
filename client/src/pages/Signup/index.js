import React, { Component } from "react";
import SignupForm from "../../components/Signupform";
import "./style.css";

class Signup extends Component {
    state = {
        firstName: "",
        lastName: "",
        userName: "",
        passWord: "",
        email: "",
        street: "",
        city: "",
        state: "",
        zipcode: ""
    }
    handleInputChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    };
    handleFormSubmit = e => {
        e.preventDefault();
        console.log("firstName:", this.state.firstName, "lastName:", this.state.lastName, "userName:", this.state.userName, "passWord:", this.state.passWord, "email:", this.state.email, "street:", this.state.street, "city:", this.state.city, "state:", this.state.state, "zipcode:", this.state.zipcode)
        // API.logIn(this.state.username, this.state.password)
        //     .then(res => {
        // console.log(res)
        // })

    }
    render() {
        return (
            <div>

                <h1 className="title">ECommerce</h1>
                <SignupForm
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                />
            </div>
        )
    }
};

export default Signup;

