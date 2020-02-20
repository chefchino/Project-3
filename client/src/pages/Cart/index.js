import Wrapper from "../../components/Wrapper";
import Card from "../../components/Card";
import { Container } from "../../components/Grid";
import React, { Component } from 'react';
import API from "../../utils/API";
class Cart extends Component {
    state = {
        cart: [],
        subtotal: 0,
        total: 0
    };
    componentDidMount() {
        this.handleGetFromCart();
        console.log("this.state", this.state)
    }
    deleteItem = () => {
        var User = sessionStorage.getItem("Logged In")
        API.deleteItem(User)
        .then(res =>
            this.setState({cart: res.data, title: "", image: "", category: "", rating: "", price: "", description: ""})
            )
    }
    handleGetFromCart = () => {
        var User = sessionStorage.getItem("Logged In")
        API.getCartItems(User)
            .then(res =>
                this.setState({ cart: res.data, title: "", image: "", category: "", rating: "", price: "", description: "" })
            )
            .then(() => this.getsubTotal())
            .then(() => this.getTotal())
            .catch(err => console.log(err));
    };
    getsubTotal = () => {
        const totalPrices = this.state.cart.map(item => item.price)
        console.log(totalPrices, totalPrices.reduce((a, b) => a + b, 0))
        this.setState({ subtotal: Math.ceil((totalPrices.reduce((a, b) => a + b, 0)) * 100) / 100 })
    }
    getTotal = () => {
        const Total = this.state.subtotal * 1.0475
        this.setState({ total: Math.ceil(Total * 100) / 100 })
    }
    handlePurchase = e => {
        e.preventDefault();
        this.deleteCart();
    }
    deleteCart = () => {
        var User = sessionStorage.getItem("Logged In")
        API.Purchase(User)
            .then(res => {
                console.log("RES!!!!!!!", res)
            })
        this.setState({ cart: [], subtotal: 0, total: 0 })
        alert("You purchased the item(s) in your cart!");
    }
    render() {
        return (
            <Container fluid>
                <h1 className="title">ee</h1>
                <Container>
                    <h7>SubTotal: {this.state.subtotal}</h7>
                    <br></br>
                    <h7>Tax: 4.75%</h7>
                    <h4>Total: {this.state.total}</h4>
                    <button type="submit"
                        onClick={this.handlePurchase}
                        className="btn btn-success">
                        Buy IT!</button>
                </Container>
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
            </Container>
        )
    }
}

export default Cart;