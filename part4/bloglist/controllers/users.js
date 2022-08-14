const userSchema = require('../models/user');
const blogSchema = require('../models/blog');
const bcrypt = require('bcrypt');

const getUser = async (req, res) => {
    const user = await userSchema.find({}).populate('blogs', {title: 1, author: 1, url: 1, likes: 1});
    res.status(200).json(user);
}

const createUser = async (req, res) => {
    const {username, name, email, password, userId } = req.body;

    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    const user = new userSchema({
        username,
        name,
        email,
        passwordHash,
        userId
    });

    const savedUser = await user.save();

    res.status(201).json(savedUser);
}

const deleteUser = async (req, res) => {
    const user = await userSchema.findByIdAndRemove(req.params.id);
    res.status(200).json(user)
}

module.exports = {
    getUser,
    createUser,
    deleteUser
};