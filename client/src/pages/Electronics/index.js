import products from "../../product.json";
import NavTabs from "../../components/NavBar";
import SearchBar from "../../components/SearchBar";
import Wrapper from "../../components/Wrapper";
import {Container} from "../../components/Grid";
import Card from "../../components/Card";
import React, { Component } from "react";

class Electronics extends Component {
    state = {
        products: products
    };

    render() {
        console.log(this.state.friends)
        return (
            <Container fluid>

            <h1 className="title">Ecommerce</h1>
            <SearchBar/>
            <Wrapper>
                {this.state.products.map(product => (
                    <Card
                    id={product.id}
                    key={product.id}
                    title={product.id}
                    rating={product.rating}
                    price={product.price}
                    />


                ))}

            </Wrapper>
            </Container>

        )
    }
}
export default Electronics;