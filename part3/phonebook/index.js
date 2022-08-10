require('dotenv').config()
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const Note = require('./models/person');
const {
    default: mongoose
} = require('mongoose');
const { request } = require('express');
const { db } = require('./models/person');


const app = express();


app.use(express.json());
app.use(cors());
app.use(morgan(':method :url :status :response-time ms - :res[content-length] :body'))

morgan.token('body', res => {
    return JSON.stringify(res.body)
})

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`)
})

app.get('/id/persons', (req, res) => {
    Note.find({}).then((data) => res.json(data))
    console.log(db.collection('notes').find({"name": "Hernan"}))
})

app.get('/id/persons/:id', (req,res, next) => {
    Note.findById(req.params.id)
    .then((data) => {
        if(data) {
            res.json(data)
        } else {
            res.status(404).end();
        }
    })
    .catch(error => next(error))
})

app.delete('/id/persons/:id', (req,res, next) => {
    Note.findByIdAndRemove(req.params.id)
    .then((data) => {
        if(data) {
            res.json(data)
        } else {
            res.status(404).end();
        }
    })
    .catch(error => next(error))
})

app.put('/id/persons/:id', (req, res) => {
    const newPhonebook = {
        name: req.body.name,
        number: req.body.number
    };

    

    Note.findByIdAndUpdate(req.params.id, {$set: newPhonebook}, {new: true}, (err, data) => {
        if(!err) {
            res.status(200).json(data)
        } else {
            console.log(err)
        }
    })
})


app.post('/id/persons', (req, res, next) => {
    const phonebooks = new Note({
        name: req.body.name,
        number: req.body.number,
        id: req.body.id
    })
    phonebooks.save()
    .then((data) => {
        if(data) {
            res.json(data)
        } else {
            res.status(404).end();
        }
    })
    .catch(error => next(error))
})



    

const errorHandler = (error, req, res, next) => {

    if(error.name === 'CastError') {
        return res.status(400).send({error: 'malformation id'})
    } else if (error.name === 'ValidationError'){
        return res.status(400).json({error: error.message})
    }
}

app.use(errorHandler);

// Mongoose