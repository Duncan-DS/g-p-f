import axios from 'axios';

const URL = axios.create({
    baseURL: "https://api.github.com",
});

export { URL };