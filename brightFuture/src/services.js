import axios from 'axios';
let AUTH_TOKEN = localStorage.getItem('token');

axios.defaults.baseURL = 'http://localhost:5000';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/json';

//get all available degree list
async function getAllDegreesList() {
    try {
        var res = await axios.get("/degrees");
        return res
    } catch (error) {
        return error;
    }
}

export const userService= { getAllDegreesList }