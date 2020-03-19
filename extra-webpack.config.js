
const path = require('path');

module.exports = {
  resolve: {
    extensions: ['.js'],
    alias: {
      fs: path.resolve(__dirname, 'src/mock/fs.mock.js'),
      child_process: path.resolve(
        __dirname,
        'src/mock/child_process.mock.js'
      ),
      'https-proxy-agent': path.resolve(
        __dirname,
        'src/mock/https-proxy-agent.mock.js',
      ),
    },
  },
};