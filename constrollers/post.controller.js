import { Post } from '../models/post.model.js';
import ApiError from '../utils/apiError.js';
import catchAsync from '../utils/catchAsync.js';

export const createPost = catchAsync(async (req, res) => {
    const post = await Post.create({ ...req.body, author: req.user._id });
    if (!post) {
        return next(new ApiError('Error al crear la publicación', 400));
    }
    req.status(201).json(post)
})

export const getAllPosts = catchAsync(async (req, res) => {
    const { term } = req.query;
    const query = term
        ? {
            $or: [
                { title: new RegExp(term, 'i') },
                { content: new RegExp(term, 'i') },
                { category: new RegExp(term, 'i') },
            ]
        }
        : {};
    const posts = await Post.find(query).populate('author', 'name email').sort({ createdAt: -1 });
    if (!posts) {
        return next(new ApiError('Publicación no encontrada.', 404));
    }
    res.status(200).json(posts);
})

export const getPost = catchAsync(async (req, res) => {
    const post = await Post.findById(req.params.id).populate('author', 'name email')
    if (!post) {
        return next(new ApiError('Publicación no encontrada.', 404));
    }
    res.json(post);
})

export const updatePost = catchAsync(async (req, res) => {
    const post = await Post.findByIdAndUpdate(req.params.id)
    if (!post) {
        return next(new ApiError('Publicación no encontrada.', 404));
    }
    if (!post.author.equals(req.user._id)) {
        return next(new ApiError('No estás autorizado a actualizar esta publicación.', 403));
    }
    Object.assign(post, req.body);
    await post.save();
    res.status(200).json(post);
})

export const deletePost = catchAsync(async (req, res) => {
    const post = await Post.findOneAndDelete({ _id: req.params.id, author: req.user._id });
    if (!post) throw new ApiError(404, 'Publicación no encontrada o no autorizada');
    res.status(204).send();
});