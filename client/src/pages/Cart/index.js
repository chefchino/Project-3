import Wrapper from "../../components/Wrapper";
import { Container } from "../../components/Grid";
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import NavTabs from "./components/NavBar";
// import Electronics from "./pages/Electronics";


export default class Cart extends Component {
    render() {
        return (
            <div>
                {this.props.id}
                <br>
                {this.props.product}</br>
            </div>
        )
    }



}
