import express from 'express';
const cors = require('cors');
import router from './routes/route';

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3001;

app.use('/api/', router);


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});