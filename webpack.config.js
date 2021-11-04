const path = require('path');

module.exports = {
  entry: './react/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
};