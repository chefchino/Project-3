import products from "../../product.json";
import NavTabs from "../../components/NavBar";
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

            <NavTabs/>
            
            <h1 className="title">Ecommerce</h1>
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