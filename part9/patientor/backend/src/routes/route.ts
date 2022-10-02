import express from 'express';
import patientServices from '../services/patientService';

const router = express.Router();

router.get('/ping', (_req, res) => {
    res.send(patientServices.getEntries());
});

router.get('/patients', (_req, res) => {
    res.send(patientServices.getPatients())
})

export default router;