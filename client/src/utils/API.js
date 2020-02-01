import axios from "axios";

export default {
    getProduct: function(search) {
        console.log(search)
        return axios.get("/api/products/" + search);
}
};