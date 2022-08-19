const unknownEndpoint = (req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error)
}

const errorHandler = (error, request, response, next) => {

    console.log(error.message);
    if(error.name === 'CastError') {
        return response.status(400).send({error: 'malformatted id'});
    }
    if(error.name === 'Not Found') {
        return response.status(500).send({error: 'Not Found'});
    }
    if(error.name === 'ValidationError') {
        return response.status(400).send({error: 'name is shorter than minimum length (3)'})
    }
    next(error)
}

module.exports = {
    unknownEndpoint,
    errorHandler
};