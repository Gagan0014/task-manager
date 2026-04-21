const adminOnly = (req, res, next) => {
  if (!req.user) {
    const err = new Error("Unauthorized");
    err.statusCode = 401;
    return next(err);
  }

  if (req.user.role === "admin") {
    return next();
  }

  const err = new Error("Admin access only");
  err.statusCode = 403;
  return next(err);
};

export default adminOnly;