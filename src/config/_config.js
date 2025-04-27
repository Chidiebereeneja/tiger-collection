import axios from "axios";

export default function init() {
    axios.defaults.baseURL = 'https://student-food-be.onrender.com/api/';
    // axios.defaults.headers.common['Authorization'] = 'Bearer YOUR_API_TOKEN';
}