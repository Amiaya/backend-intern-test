const Joi = require('joi')
const { RegisterSchema } = require('../schema/user')
const service = require('../services/user')


async function register(req, res, next) {
    try {
        const value = await RegisterSchema.validateAsync(req.body);
        const user = await service.register(value);

        return res.status(200).send({
            success: true,
            data: user.toJSON(),
            status: 200
        });

    } catch (err) {
        return res.status(400).send({
            success: false,
            error: err.details[0].message,
            status: 400
        })
    }
}

module.exports = {
    register
}