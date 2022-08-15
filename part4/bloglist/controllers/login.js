// JsonWebToken & Bcrypt
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// User Model to verify login details
const userSchema = require('../models/user');



const loginRouter = async (req, res) => {
    const {username, password} = req.body;
    const user = await userSchema.findOne({username});

    const passwordCorrect = user === null
    ? false 
    : await bcrypt.compare(password, user.passwordHash)

    if(!(user && passwordCorrect)) {
        return res.status(400).json({
            error: 'invalid username or password'
        });
    }

    const userToken = {
        username: user.username,
        id: user._id
    };

    const token = jwt.sign(userToken, process.env.SECRET)

    res
      .status(200)
      .send({token, username: user.username, name: user.name})


}


module.exports = {
    loginRouter
};
