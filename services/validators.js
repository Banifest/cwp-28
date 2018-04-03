const Joi = require('joi');

const schemas = {
    'user': Joi.object().keys({
        name: Joi.string().max(50).min(1),
        email: Joi.string().email().max(50).min(1),
    }),

    'tweet': Joi.object().keys({
        message: Joi.string().max(50).min(1),
        publishedOn: Joi.string().max(50).min(1),
        authorId: Joi.number()
    }),

    'like': Joi.object().keys({
        tweetId: Joi.number(),
        authorId: Joi.number(),
    }),
};

exports.check = function (schema, body)
{
    if (!schemas[schema])  return {};
    return Joi.validate(body, schemas[schema], { presence: 'required' });
};