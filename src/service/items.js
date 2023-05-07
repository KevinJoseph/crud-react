import axios from "axios";
const API_URL = 'http://localhost:5000/api'

const getAll = () => {
    return axios
        .get(`${API_URL}/items`)
        .then(response => {
            const { data } = response;
            return data
        })
}

const getItem = (id) => {
    return axios
        .get(`${API_URL}/items/${id}`)
        .then(response => {
            const { data } = response;
            return data
        })
}

const create = (item) => {
    console.log(item)
    return axios.post(`${API_URL}/items`,{title: item.title, description: item.description})
        .then(response => response.data)
        .catch(error => {
            throw error;
        });
};
const update = (id,item) => {  
    return axios.patch(`${API_URL}/items/${id}`, item)
        .then(response => response.data)
        .catch(error => {
            throw error;
        });

}

const deleteItem = (id) => {    
    return axios.delete(`${API_URL}/items/${id}`)
        .then(response => response.data)
        .catch(error => {
            throw error;
        });
}

export default {
    getAll,
    getItem,
    create,
    update,
    deleteItem
}