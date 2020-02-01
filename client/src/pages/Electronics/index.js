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
    // componentDidMount() {
    //     this.setState({ products: products })
    // }
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
                            title={product.id}
                            rating={product.rating}
                            price={product.price}
                        />


                    )
                    )}

                </Wrapper>
            </Container>

        )
    }
}
export default Electronics;