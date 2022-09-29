import express from 'express';


const app = express();

app.use(express.json());

const PORT = 3000;

app.get('/api/listen', (_req, res) => {
    res.send('Ping');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});