function errorHandler(err, req, res, next) {
  console.error(err);

  if (err.message === "Category not found.") {
    return res.status(404).json(err.message);
  }

  if (err.message === "Category already exists.") {
    return res.status(409).json(err.message);
  }

  res.status(500).json({ error: "Internal server error." });
}

module.exports = errorHandler;
