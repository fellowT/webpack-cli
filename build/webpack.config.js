const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config')
const devConfig = require('./webpack.dev.config')
const prodConfig = require('./webpack.prod.config')
module.exports = function(env,argv){
  let config = argv.mode === 'development' ? devConfig : prodConfig;
  console.log(config);
  
  return merge(baseConfig,config)
  
}