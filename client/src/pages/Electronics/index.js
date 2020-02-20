import SearchBar from "../../components/SearchBar";
import Wrapper from "../../components/Wrapper";
import { Container } from "../../components/Grid";
import Card from "../../components/Card";
import React, { Component } from "react";
import API from "../../utils/API.js";
import "./style.css";
class products extends Component {
    state = {
        products: [],
        search: "",
        results: [],
        cart: [],
        modalOpen: true,
    };
    componentDidMount() {
        this.setProducts();
        this.loadProduct();
    }
    setProducts = () => {
        let Products = [];
        Products.forEach(item => {
            const singleItem = { ...item };
            Products = [...Products, singleItem];
        });
    }
    loadProduct = () => {
        API.getAllProducts()
            .then(res =>
                this.setState({ products: res.data, title: "", image: "", category: "", rating: "", price: "", description: "" })
            )
            .catch(err => console.log(err));
    };
    loadSearch = () => {
        API.getProduct(this.state.search)
            .then(res =>
                this.setState({ products: res.data, title: "", image: "", category: "", rating: "", price: "", description: "" }))
    }
    handleInputChange = e => {
        this.setState({ search: e.target.value });
    };
    handleFormSubmit = e => {
        e.preventDefault();
        console.log(this.state.search)
        this.loadSearch();
    };
    getItem = (id) => {
        const products = this.state.products.find(item => item.id === id);
        return products;
    };
    handleDetail = (discription) => {
        const products = this.getItem(discription);
        this.setState(() => {
            return { Product: products };
        }, () => {
            console.log(this.state);
        }
        );
    };
    handleAddToCart = (id) => {
        console.log(id);
        let Products = [...this.state.products];
        const index = Products.indexOf(this.getItem(id));
        const products = Products[index];
        this.setState({

            cart: [...this.state.cart, products]
        }, () => {
            console.log(this.state);
            var User = sessionStorage.getItem("Logged In")
            API.addCartItems(this.state.cart, User);
            console.log({ User })
        });
    };
    render() {

        return (
            <Container fluid>

                <h1 className="title">ee</h1>
                <SearchBar
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                />
                <hr></hr>
                <Wrapper>
                    {this.state.products.map(product => (
                        <Card
                            className="productCards"
                            id={product.id}
                            key={product.id}
                            title={product.title}
                            rating={product.rating}
                            price={product.price}
                            image={product.image}
                            description={product.description}
                            handleAddToCart={this.handleAddToCart}
                            handleDetail={this.handleDetail}
                        />
                    )
                    )}
                </Wrapper>
            </Container>
        )
    }
}

export default products;
