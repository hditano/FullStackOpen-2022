import axios from 'axios';

const URL = '/api/persons';

const getPerson = () => {
    return axios.get(`${URL}`)
}

const createPerson = newObject => {
    return axios.post(`${URL}`, newObject);
}

const editPerson = (id, newObject) => {
    return axios.put(`${URL}/${id}`, newObject)
}

const deletePerson = (id) => {
    return axios.delete(`${URL}/${id}`)
}

export default {
    getPerson: getPerson,
    createPerson: createPerson,
    editPerson: editPerson,
    deletePerson: deletePerson
}