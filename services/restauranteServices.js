import axios from 'axios';

export const getApiUrl = () => {
    return "http://apirestaurante-001-site1.itempurl.com/";
}

export const getRestaurante = () => {
    return axios.get(getApiUrl() + "api/restaurante")
        .then(
            response => {
                return response.data;
            }
        )
}

export const getCardapio = () => {
    return axios.get(getApiUrl() + "api/cardapio")
        .then(
            response => {
                return response.data;
            }
        )
}

export const postCliente = (cliente) => {
    return axios.post(getApiUrl() + "api/cliente", cliente)
        .then(
            response => {
                return response.data;
            }
        )
}