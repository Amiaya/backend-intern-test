const bcrypt = require('bcrypt')
const User = require('../models').User
const jwt = require('jsonwebtoken')

async function register(data) {
    const user = User.create( data );
    return user;
}

async function login({ email, password}) {
    const user = await User.findOne({
        where: {
            email
        }
    })
    if (!user) {
        throw new Error('Invalid Credentials')
    }

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
        throw new Error('Invalid Credentials')
    }

    const token = jwt.sign(
        { id: user.id, email: user.email }, 
        process.env.SECRET_KEY,
        { expiresIn: 600 }
    )

    return { user, token };
}

module.exports = {
    register,
    login
}