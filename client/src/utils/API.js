import axios from "axios";

export default {
    getAllProducts: function() {
        return axios.get("api/products")
    },
    getProduct: function(search) {
        console.log(search)
        return axios.get("/api/products/" + search);
},
    logIn: function(userLogin, passwordLogin) {
        console.log(userLogin, passwordLogin)
        return axios.post("api/users/")
    }
};