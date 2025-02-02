const Joi = require('joi')

const RegisterSchema = Joi.object({
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
    email: Joi.string().email().required(),
    phone: Joi.string().min(11).max(14).required(),
    password: Joi.string().min(8).required()
})

const LoginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
})

module.exports = {
    RegisterSchema,
    LoginSchema
}
