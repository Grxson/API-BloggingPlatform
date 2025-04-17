import Joi from 'joi';
import ApiError from '../utils/apiError';

export const validate = (schema) => (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
        throw new ApiError(400, error.details[0].message);
    }
    next();
}