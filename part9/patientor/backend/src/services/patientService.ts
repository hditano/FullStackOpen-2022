import diagnoses from '../data/diagnoses.json';
import patients from '../data/patients.json';
import {PatientsEntry, NewPatient, Patients} from '../types';

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

const postPatients = (entry: NewPatient): Patients => {
    const newEntry = {
        id: "7878",
        ssn: "Hello",
        ...entry
    };
    patients.push(newEntry);
    return newEntry;
}

export default {
    getEntries,
    getPatients,
    postPatients
}