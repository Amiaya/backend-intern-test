const Joi = require('joi')
const user = require('../models/user')
const User = require('../models').User

async function register(data) {
    const user = User.create( data );
    return user;
}

module.exports = {
    register
}