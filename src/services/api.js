//URL Base: https://api.themoviedb.org/3/
//API URL: https://api.themoviedb.org/3/movie/now_playing?api_key=88dc86e0f411008ea2bd7d44edb120c8&language=pt-BR

import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;