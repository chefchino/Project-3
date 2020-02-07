import axios from "axios";

export default {
    getAllProducts: function() {
        return axios.get("api/products")
    },
    getProduct: function(search) {
        return axios.get("/api/products/" + search);
},
    logIn: function(loginData) {
        // console.log("I LOGGED IN!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
        return axios.post("api/login", loginData)
    }, 
    signUp: function(userData) {
        return axios.post("api/signup", userData)
    }
};