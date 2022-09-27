import { calculateBmi } from './bmiCalculator';
import express from 'express';
const app = express();


app.get('/bmi', (req, res) => {
    const {weight, height} = req.query;
    if(weight && height) {
    res.json(calculateBmi(Number(height), Number(weight)))
    } else {
        res.json({error: "Malformatted parameters"})
    }
})

const PORT = 3003;

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`)
})