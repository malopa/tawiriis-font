import axios from 'axios'
// import {Notyf} from 'notyf';
// import 'notyf/notyf.min.css';

const service = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_HOST,
    timeout: 10000,
});

// service.interceptors.response.use(response => {
//         return response.data;
//     },
//     error => {
//         let message = error.message;
//         if (error.response.data && error.response.data.errors) {
//             message = error.response.data.errors;
//         } else if (error.response.data && error.response.data.error) {
//             message = error.response.data.error;
//         }
//
//         const notyf = new Notyf({
//             duration: 50000,
//             dismissible: true,
//         });
//
//         notyf.error(message);
//
//         return Promise.reject(error);
//     },
// );


export default service
