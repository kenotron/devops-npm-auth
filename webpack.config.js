const path = require('path');

module.exports = {
  entry: 'shebang-loader!better-vsts-npm-auth/dist/cli.js',
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'devops-npm-auth.js'
  },
  mode: 'production'
};
