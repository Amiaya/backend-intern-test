const { RegisterSchema } = require('../schema/user')
const service = require('../services')


async function registration(req, res, next) {
    try {
        const { error, value } = Joi.validate(req.body, RegisterSchema);

        if (error) {
            return res.status(400).send({
                success: false,
                error: error.details[0].message
            });
        }

        const user = await service.register(value);

        return res.status(200).send({
            success: true,
            data: user.toJSON(),
            status: 200
        });


    } catch (err) {
        next(err);
    }
}