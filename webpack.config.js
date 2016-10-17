var webpack = require('webpack');

module.exports = {
  // 가장 처음 읽을 스크립트파일
  // 여기서부터 import 되어있는 다른 스크립트를 불러온다.
  entry: [
    './src/index.js',
    'webpack-dev-server/client?http://0.0.0.0:3001',
    'webpack/hot/only-dev-server'
  ],

  devtool: 'source-map',
  // 파일을 합치고 ./dist/bundle.js 에 저장한다.
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },

  //개발서버 설정
  devServer: {
    hot: true,  // 파일 수정 시 리로딩 여부
    filename: 'bundle.js',
    publicPath: '/',
    historyApiFallback: true,
    // inline: true, // webpack-dev-server 의 client를 bundle 에 포함 시키는 것
    // host: '0.0.0.0',  // localhost로 설정 시 외부 접근이 안됨
    contentBase:  './dist', // index파일 위치
    proxy: {
      '*': 'http://localhost:3000'
    }
  },

  watch: true,

  // ES6 문법과 JSX 문법을 사용한다
  // 로더를 통해 es6, react 문법을 일반 자바스크립트로 변환
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel?' + JSON.stringify({
          cacheDirectory: true,
          presets: ['es2015', 'react']
        })],
        exclude: /node_modules/
      }
    ]
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]

  // resolve: {
  //   extensions: ['', '.js', '.json', '.jsx']
  // }
};
