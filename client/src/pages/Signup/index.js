import React, { Component } from "react";
import SignupForm from "../../components/Signupform";
import "./style.css";
import API from "../../utils/API";
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
    handleSignUp = () => {
        if (this.state.firstName &&
            this.state.lastName &&
            this.state.email &&
            this.state.userName &&
            this.state.passWord &&
            this.state.street &&
            this.state.city &&
            this.state.state &&
            this.state.zipcode
        ) {
            API.signUp({
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                userName: this.state.userName,
                passWord: this.state.passWord,
                email: this.state.email,
                street: this.state.street,
                city: this.state.city,
                state: this.state.state,
                zipcode: this.state.zipcode
            })
                .then(function (res) {
                    console.log("Added new User!")
                    sessionStorage.setItem("NewUser!!!", res.id)
                    window.location.replace("/electronics")
                })
                .catch(err => console.log(err));
        }
        console.log("firstName:", this.state.firstName,
            "lastName:", this.state.lastName,
            "userName:", this.state.userName,
            "passWord:", this.state.passWord,
            "email:", this.state.email,
            "street:", this.state.street,
            "city:", this.state.city,
            "state:", this.state.state,
            "zipcode:", this.state.zipcode)
    }
    handleInputChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    };
    handleFormSubmit = e => {
        e.preventDefault();
        this.handleSignUp();
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

