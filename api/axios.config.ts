import axios from 'axios';

const axiosAddapter = axios.create({
  proxy: {
    host: '192.168.0.8',
    port: 8080,
  },
  //baseURL: 'https://eccomerce-mern-backend.vercel.app', // URL base para todas las solicitudes
  baseURL: 'http://192.168.0.8:8080/api', // URL base para todas las solicitudes
  timeout: 5000, // Tiempo máximo de espera para la solicitud (en milisegundos)
  headers: {
    'Content-Type': 'application/json',
  },
  auth: {
    username: 'user',
    password: 'password',
  },
});

export default axiosAddapter;
