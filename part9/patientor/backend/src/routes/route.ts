import express from 'express';
import patientServices from '../services/patientService';

const router = express.Router();

router.get('/ping', (_req, res) => {
    res.send(patientServices.getEntries());
});

router.get('/patients', (_req, res) => {
    res.send(patientServices.getPatients());
})

router.post('/patients', (req, res) => {
    const {name, dateOfBirth, gender, occupation} = req.body;
    const newPatientEntry = patientServices.postPatients({
        name,
        dateOfBirth,
        gender,
        occupation
    });
    res.json(newPatientEntry);
})

export default router;