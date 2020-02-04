// import products from "../../product.json";
import SearchBar from "../../components/SearchBar";
import Wrapper from "../../components/Wrapper";
import { Container } from "../../components/Grid";
import Card from "../../components/Card";
import React, { Component } from "react";
import API from "../../utils/API.js";

class Electronics extends Component {
    state = {
        products:[],
        search: "",
        results: []
    };
    componentDidMount() {
        this.loadProduct();
        this.loadSearch();
    }
    loadProduct = () => {
        API.getAllProducts()
        .then(res =>
            this.setState({products: res.data, title: "", image: "", category: "", rating: "", price:"", description: "" })
            )
            .catch(err => console.log(err));
    };
    loadSearch = () => {
        this.setState({products: []})
        API.getProduct()
        .then(res =>
            this.setState({products: res.data, title: "", image: "", category: "", rating: "", price:"", description: "" }))
    }
    handleInputChange = e => {
        this.setState({ search: e.target.value });
    };
    handleFormSubmit = e => {
        e.preventDefault();
        console.log(this.state.search)
        API.getProduct(this.state.search)
        .then(res => {
            this.setState({ results: res.products })
        })
        console.log(this.state.results)
    }

    render() {
        console.log(this.state.friends)
        return (
            <Container fluid>

                <h1 className="title">Ecommerce</h1>
                <SearchBar
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                />
                <Wrapper>
                    {this.state.products.map(product => (
                        <Card
                            id={product.id}
                            key={product.id}
                            title={product.title}
                            rating={product.rating}
                            price={product.price}
                            image={product.image}
                        />


                    )
                    )}

                </Wrapper>
            </Container>

        )
    }
}
export default Electronics;