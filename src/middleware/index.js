if (process.env.NODE_ENV === 'production') {
  module.exports = require('./configureMiddleware.prod');
} else {
  module.exports = require('./configureMiddleware.dev')
}