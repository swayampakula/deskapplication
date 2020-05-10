var path = require('path');


module.exports = {
    entry : "./index.js",
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "bundle.js",
        publicPath: "/"
    },
    devServer: {
        historyApiFallback: true,
    },
    
    module: {    
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        }
      ]
    }
  };
 