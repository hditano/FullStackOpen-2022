import axios from 'axios';

const URL = 'http://localhost:3001/persons';

const getPerson = () => {
    return axios.get(`${URL}`)
}

const createPerson = newObject => {
    return axios.post(`${URL}`, newObject);
}

const editPerson = (id, newObject) => {
    return axios.put(`${URL}/${id}`, newObject)
}

export default {
    getPerson: getPerson,
    createPerson: createPerson,
    editPerson: editPerson
}