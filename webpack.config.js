const path = require('path');

module.exports = {
  entry: ['./src/index.js'],
  // devtool: 'source map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options:{
            presets:[
              ['@babel/preset-env',
                {
                  targets:{

                    browsers:['> 1%','last 2 versions']
                    //chrome:'52'
                    //设置浏览器支持
                  }
                }]
            ]
          }
        },
        exclude: '/node_modules/'
      }
    ]
  }
};