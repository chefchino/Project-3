import axios from "axios";

export default {
    getAllProducts: function() {
        return axios.get("api/products")
    },
    getProduct: function(search) {
        return axios.get("/api/products/" + search);
},
    logIn: function(loginData) {
        return axios.post("api/login", loginData)
    }, 
    signUp: function(userData) {
        return axios.post("api/signup", userData)
    },
    addCartItems: function(cartItem, UserId) {
        return axios.post("api/cart/"+ UserId, cartItem)
    },
    getCartItems: function(UserId) {
        return axios.get("api/cart/" + UserId)
    },
    Purchase: function(UserId) {
        return axios.delete("api/cart/" + UserId)
    }
};