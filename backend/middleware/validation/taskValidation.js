const taskValidation = (req, res, next) => {
  const { title } = req.body;

  if (!title || title.trim() === "") {
    const err = new Error("title is required");
    err.statusCode = 400;
    return next(err);
  }

  return next();
};

export default taskValidation;