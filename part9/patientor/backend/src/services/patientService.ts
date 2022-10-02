import diagnoses from '../data/diagnoses.json';
import patients from '../data/patients.json';

const getEntries = () => {
    return diagnoses;
}

const getPatients = () => {
    return patients;
}


export default {
    getEntries,
    getPatients
}