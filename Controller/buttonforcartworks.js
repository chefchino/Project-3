// import products from "../../product.json";
import SearchBar from "../../components/SearchBar";
import Wrapper from "../../components/Wrapper";
import { Container } from "../../components/Grid";
import Card from "../../components/Card";
import React, { Component } from "react";
import API from "../../utils/API.js";
import "./style.css";

class products extends Component {
    state = {
        products:[],
        search: "",
        results: [],
        cart: [],
        modalOpen:true,     
    };
    componentDidMount() {
        this.setProducts();
    }
    setProducts = ()=> {
        let Products = [];
        Products.forEach(item => {
            const singleItem = {...item };
            Products = [...Products, singleItem];
        });
    }
    componentDidMount() {
        this.loadProduct();
        // this.loadSearch();
    }
    loadProduct = () => {
        API.getAllProducts()
        .then(res =>
            this.setState({products: res.data, title: "", image: "", category: "", rating: "", price:"", description: "" })
            )
            .catch(err => console.log(err));
    };
    loadSearch = () => {
        // this.setState({products: []})
        API.getProduct(this.state.search)
        .then(res =>
            this.setState({products: res.data, title: "", image: "", category: "", rating: "", price:"", description: "" }))
            console.log("here---------------------------------------------")
    }
    handleInputChange = e => {
        this.setState({ search: e.target.value });
    };
    handleFormSubmit = e => {
        e.preventDefault();
        console.log(this.state.search)
        this.loadSearch();
        // API.getProduct(this.state.search)
        // .then(res => {
        //     this.setState({ results: res.products })
        //     this.setState({search: ""})

        // })
        // console.log(this.state.results)

     };
     getItem = (id) => {
         const products = this.state.products.find(item => item.id === id);
         return products;
     };
     handleDetail = (discription) => {
         const products = this.getItem(discription);
         this.setState(()=>{
             return {Product: products};
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
        //  products.inCart = true;
        //  products.count = 1;
         const price = products.price;
        //  products.total = price;
         this.setState(() => {
             
             return { products: Products, cart: [...this.state.cart,
            products ]};
         }, () => {
         console.log(this.state);
         
         }
         );
     };
     
      
     

    render() {
        
        return (
            <Container fluid>

                <h1 className="title">Ecommerce</h1>
                <SearchBar
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                    
                />
                <hr></hr>
                <Wrapper>
                    {this.state.products.map(product => (
                        <Card
                            id={product.id}
                            key={product.id}
                            title={product.title}
                            rating={product.rating}
                            price={product.price}
                            image={product.image}
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
--------------------------------------------------------------------------------------------------------------------------------------------------------------------

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
--------------------------------------------------------------------------------------------------------------------------------------------------------

import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
// function CartBtn(props) {
//   return (
//     <button  type="submit" disabled={props.inCart ? true : false}
//     onClick={() => { console.log("added to cart") }}
//     className="btn btn-success">
//     {props.inCart ? (<p className="mb=0" disabled>{" "}Carted</p>) : (<p className="mb=0" disabled>{" "} Want This?</p>)}
// </button>
//   )
// }


class CartBtn extends Component {
  addToCart = () => {
    this.props.onAddToCart(this.props.value);
  }

  render() {
    return (
      <th addToCart={this.addToCart}>
        {this.props.column}
      </th>
    );
  }
}


export default CartBtn;
---------------------------------------------------------------------------------------------------------------------------------------------------------------
