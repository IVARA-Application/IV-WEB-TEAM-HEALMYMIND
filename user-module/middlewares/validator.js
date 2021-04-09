function validateRequest(location, schema) {
  return async (req, res, next) => {
    let _location;
    switch (location) {
      case "query":
        _location = req.query;
        break;
      case "body":
        _location = req.body;
        break;
      case "params":
        _location = req.params;
        break;
    }
    try {
      await schema.validate(_location);
      next();
    } catch (error) {
      const message = error.errors[0];
      return res.status(400).json({ error: message });
    }
  };
}

module.exports = validateRequest;
