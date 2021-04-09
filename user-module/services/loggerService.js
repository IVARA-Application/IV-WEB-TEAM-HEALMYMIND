const bunyan = require("bunyan");

const logger = bunyan.createLogger({
  name: "Mentor Baba User Module",
});

module.exports = logger;
