import axios from 'axios';

const instance  = axios.create({
    baseURL: 'https://react-my-burger-e8e2a.firebaseio.com/'
});

export default instance;
