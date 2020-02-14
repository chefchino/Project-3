import Wrapper from "../../components/Wrapper";
import Card from "../../components/Card";
import { Container } from "../../components/Grid";
import React, { Component } from 'react';
import API from "../../utils/API";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import Electronics from "./pages/Electronics";


class Cart extends Component {
    state = {
        cart: [],
        subtotal: 0,
        total: 0
    };

    componentDidMount() {
        this.handleGetFromCart();
    }
handleGetFromCart = () => {
    var User = sessionStorage.getItem("Logged In")
    API.getCartItems(User)
    .then(res =>
        this.setState({cart: res.data, title: "", image: "", category: "", rating: "", price:"", description: ""})
        )
        .catch(err => console.log(err));
};
    render() {
        return (
            <Container fluid>
                <h1 className="title">Ecommerce</h1>
                <hr></hr>
                <Wrapper>
                    {this.state.cart.map(cart => (
                        <Card
                        id={cart.id}
                        key={cart.id}
                        title={cart.title}
                        rating={cart.rating}
                        price={cart.price}
                        image={cart.image}
                        />
                    ))}

                </Wrapper>


                {/* {this.props.id}
                <br>
                {this.props.product}</br> */}
            </Container>
        )
    }



}

export default Cart;