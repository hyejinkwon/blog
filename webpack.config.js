var webpack = require('webpack');
var path = require('path');

module.exports = {
  // import(require) 되어 있는 스크립트를 불러온다.
  entry: [
    // 'babel-polyfill', // babel를 이용해 브라우저에서 ES6문법으로 실행하고 싶을때
    'webpack-dev-server/client?http://0.0.0.0:3001',
    'webpack/hot/only-dev-server',
    './assets/css/main.css',
    './client/index.js'
  ],

  devtool: 'cheap-module-eval-source-map',

  // 파일을 합치고 ./dist/bundle.js 에 저장한다.
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  //개발서버 설정
  devServer: {
    hot: true,  // 파일 수정 시 리로딩 여부
    stats: {
      colors: true
    },
    filename: 'bundle.js',
    publicPath: '/',
    historyApiFallback: true,
    // progress: true,
    // inline: true, // webpack-dev-server 의 client를 bundle 에 포함 시키는 것
    // host: '0.0.0.0',  // localhost로 설정 시 외부 접근이 안됨
    contentBase:  path.resolve(__dirname, 'dist'), // index파일 위치
    proxy: {
      '*': 'http://localhost:3000'
    }
  },

  // watch: true,

  // ES6 문법과 JSX 문법을 사용한다
  // 로더를 통해 es6, react 문법등을 일반 자바스크립트로 변환 (transpiler)
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        exclude: /node_modules/
      },
      {
        test: /\.css?$/,
        loaders: ['style', 'css']
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        loader: 'url',
        query: {
          limit: 8192,
          name: '/assets/[name].[ext]?[hash]'
        }
      },
    ]
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),  // 자주 발생하는 모듈의 순번을 올려줌
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false // 경고 메시지는 출력하지 않음
    //   }
    // }),      // 파일 압축
    new webpack.HotModuleReplacementPlugin(), // 변경된 스크립트만 핫로딩
    new webpack.NoErrorsPlugin()
  ],

  resolve: {
    extensions: ['', '.js', '.json', '.jsx']
  }
};
