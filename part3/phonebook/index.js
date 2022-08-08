const express = require('express');
const app = express();

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

const PORT = 3001;

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`)
})