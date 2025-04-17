export default fn => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(err => {
        if (err instanceof ApiError) {
            return res.status(err.statusCode).json({ message: err.message });
        }
        console.error(err);
        return res.status(500).json({ message: 'Internal Server Error' });
    });
}