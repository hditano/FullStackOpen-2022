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
    next(error)
}

module.exports = {
    unknownEndpoint,
    errorHandler
};