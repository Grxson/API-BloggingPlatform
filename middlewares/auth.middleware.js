import jwt from 'jsonwebtoken';
import { User } from '../models/user.model.js'
import ApiError from '../utils/ApiError.js';
import catchAsync from '../utils/catchAsync.js';

export const protect = catchAsync(async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer')) {
        return next(new ApiError(401, 'No Autorizado'));
    }

    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id)
    if (!user) {
        return next(new ApiError(401, 'Usuario no encontrado'));
    }
    req.user = user;
    next();
})