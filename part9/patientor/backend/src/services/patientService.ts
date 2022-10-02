import diagnoses from '../data/diagnoses.json';
import patients from '../data/patients.json';
import {PatientsEntry} from '../types';

const getEntries = () => {
    return diagnoses;
}

const getPatients = (): PatientsEntry[] => {
    return patients.map(({id, name, dateOfBirth, gender, occupation}) => ({
        id,
        name,
        dateOfBirth,
        gender,
        occupation
    }));
};


export default {
    getEntries,
    getPatients
}