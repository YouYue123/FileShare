var path = require('path');
var fs = require('fs');

var appDirectory = fs.realpathSync(process.cwd());
function resolveApp(relativePath){
  return path.resolve(appDirectory,relativePath);
}

var nodePaths = (process.env.NODE_PATH || '')
  .split(process.platform === 'win32' ?';':':')
  .filter(Boolean)
  .map(resolveApp)

module.exports = {
  appPublic : resolveApp('public'),
  appIndexJs: resolveApp('src/index.js'),
  appSrc: resolveApp('src')
  nodePaths : nodePaths
}
