import { calculateBmi } from './bmiCalculator';
import express from 'express';
import { exerciseCalculator } from './exerciseCalculator';
const app = express();

app.use(express.json())


app.get('/bmi', (req, res) => {
    const {weight, height} = req.query;
    if(weight && height) {
    res.json(calculateBmi(Number(height), Number(weight)))
    } else {
        res.json({error: "Malformatted parameters"})
    }
})

app.post('/exercise', (req, res) => {
    const {data} = req.body;
    res.json(exerciseCalculator(data))
});

const PORT = 3003;

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`)
})