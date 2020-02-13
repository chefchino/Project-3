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
