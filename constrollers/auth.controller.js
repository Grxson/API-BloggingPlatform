import jwt from 'jsonwebtoken';
import { User } from '../models/user.model.js';
import ApiError from '../utils/apiError.js';
import catchAsync from '../utils/catchAsync.js';

const signToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN,
    });
}

export const register = catchAsync(async (req, res) => {
    const { name, email, password } = req.body;
    const user = await User.create({ name, email, password });
    const token = signToken(user._id);
    res.status(201).json({
        status: 'success',
        token,
    });
})


export const login = catchAsync(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
        throw new ApiError(401, 'Credenciales inválidas');
    }
    const token = signToken(user._id);
    res.json({ token });
})