const registerValidation = (req, res, next) => {
  const { name, email, password } = req.body;

  if (!name) {
    const err = new Error("name is mandatory");
    err.statusCode = 400;
    return next(err);
  }

  if (!email) {
    const err = new Error("email is mandatory");
    err.statusCode = 400;
    return next(err);
  }

  if (typeof email !== "string" || !email.includes("@")) {
    const err = new Error("email should contain @");
    err.statusCode = 400;
    return next(err);
  }

  if (!password) {
    const err = new Error("password is required");
    err.statusCode = 400;
    return next(err);
  }

  if (password.length < 8) {
    const err = new Error("password length can't be less than 8");
    err.statusCode = 400;
    return next(err);
  }

  return next();
};

export default registerValidation;