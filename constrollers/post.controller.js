import { Post } from '../models/post.model.js';
import ApiError from '../utils/apiError.js';
import catchAsync from '../utils/catchAsync.js';

export const createPost = catchAsync(async (req, res) => {
    const { title, content, category, tags } = req.body;
    const post = await Post.create({
        title,
        content,
        category,
        tags,
        author: req.user._id,
    });
    if (!post) {
        return next(new ApiError('Post creation failed', 400));
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
        return next(new ApiError('No posts found', 404));
    }
    res.status(200).json(posts);
})