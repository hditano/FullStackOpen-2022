const userSchema = require('../models/user');
const bcrypt = require('bcrypt');

const getUser = async (req, res) => {
    const user = await userSchema.find({});
    res.status(200).json(user);
}

const createUser = async (req, res) => {
    const {name, email, password} = req.body;

    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    const user = new userSchema({
        name,
        email,
        passwordHash
    });

    const savedUser = await user.save();

    res.status(201).json(savedUser);
}


module.exports = {
    getUser,
    createUser
};