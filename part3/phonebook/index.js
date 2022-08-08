const express = require('express');
const app = express();
app.use(express.json());

let data = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]




app.get('/', (request, response) => {
    response.send('Hello Hernan!!')
})

app.get('/api/persons', (request, response) => {
    response.json(data)
})


app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id);
    const person = data.find(ele => ele.id === id);

    if(person) {
        response.json(person);
    } else {
        response.status(404).end();
    }

})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id);
    const person = data.find(ele => ele.id !== id);

    response.status(204).end();
})

app.get('/info', (request, response) => {
    let getDate = new Date(Date.now());

    const responseInfo = `Phonebook has info for ${data.length} people ${getDate}`;

    response.send(responseInfo)
})

app.post('/api/persons', (request, response) => {
    const body = request.body;

    if(!body.name) {
        return response.status(400).json({
            error: 'name missing'
        })
    }

    const person = {
        id: generateID(),
        name: body.name,
        number: body.number
    }

    persons = data.concat(person);
    console.log(persons)

    response.json(persons);
})



const generateID = () => {
    const maxID = data.length > 0 ? Math.max(...data.map(ele => ele.id)) : 0;
    return maxID + 1; 
}

const PORT = 3001;

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`)
})