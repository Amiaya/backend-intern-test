const { RegisterSchema, LoginSchema } = require('../schema/user')
const service = require('../services/user')


async function register(req, res, next) {
    try {
        const value = await RegisterSchema.validateAsync(req.body);
        const user = await service.register(value);

        return res.status(200).send({
            success: true,
            data: { user: user.toJSON() },
            status: 200
        });

    } catch (err) {

        let error;
        if (err.name === "ValidationError") {
            error = err.details[0].message
        } else {
            error = err.errors[0].message
        }

        return res.status(400).send({
            success: false,
            error,
            status: 400
        })
    }
}

async function login(req, res, next) {
    try {
        const value = await LoginSchema.validateAsync(req.body);
        const { user, token } = await service.login(value)

        res.status(200).send({
            success: false,
            data: {
                user,
                token
            },
            status: 400
        })

    } catch (err) {

        let error;
        if (err.name === "ValidationError") {
            error = err.details[0].message
        } else {
            error = err.message
        }

        res.status(400).send({
            success: false,
            error,
            status: 400
        })

    }
}

module.exports = {
    register,
    login
}