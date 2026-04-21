const loginValidation = (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    const err = new Error("All credentials are required");
    err.statusCode = 400;
    return next(err);
  }

  if (!email.includes("@")) {
    const err = new Error("Email must contain @");
    err.statusCode = 400;
    return next(err);
  }

  return next();
};

export default loginValidation;