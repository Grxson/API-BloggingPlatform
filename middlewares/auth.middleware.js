import jwt from 'jsonwebtoken';
import { User } from '../models/user.model.js'
import ApiError from '../utils/apiError.js';
import catchAsync from '../utils/catchAsync.js';

export const protect = catchAsync(async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer')) {
        return next(new ApiError('Unauthorized', 401));
    }

    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id)
    if (!user) {
        return next(new ApiError('User not found', 401));
    }
    req.user = user;
    next();
})