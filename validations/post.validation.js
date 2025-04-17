import Joi from 'joi';

export const createPostSchema = Joi.object({
    title: Joi.string().min(3).required().messages({
        'string.empty': 'El título es obligatorio',
        'string.min': 'El título debe tener al menos 3 caracteres',
    }),
    content: Joi.string().min(10).required().messages({
        'string.empty': 'El contenido es obligatorio',
        'string.min': 'El contenido debe tener al menos 10 caracteres',
    }),
    category: Joi.string().min(3).required().messages({
        'string.empty': 'La categoría es obligatoria',
        'string.min': 'La categoría debe tener al menos 3 caracteres',
    }),
    tags: Joi.array().items(Joi.string()).optional(),
})

export const updatePostSchema = Joi.object({
    title: Joi.string().min(3).optional().messages({
        'string.empty': 'El título es obligatorio',
        'string.min': 'El título debe tener al menos 3 caracteres',
    }),
    content: Joi.string().min(10).optional().messages({
        'string.empty': 'El contenido es obligatorio',
        'string.min': 'El contenido debe tener al menos 10 caracteres',
    }),
    category: Joi.string().min(3).optional().messages({
        'string.empty': 'La categoría es obligatoria',
        'string.min': 'La categoría debe tener al menos 3 caracteres',
    }),
    tags: Joi.array().items(Joi.string()),
})