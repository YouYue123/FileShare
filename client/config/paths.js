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
  appPublic : resolveApp('client/public'),
  appBuild: resolveApp('client/build'),
  appHtml: resolveApp('client/public/index.html'),
  appIndexJs: resolveApp('client/src/index.js'),
  appSrc: resolveApp('client/src'),
  nodePaths : nodePaths
}
