import express from 'express';
import patientServices from '../services/patientService';

const router = express.Router();

router.get('/ping', (_req, res) => {
    res.send(patientServices.getEntries());
});

export default router;