import express from 'express';
import path from 'path';
import favicon from 'serve-favicon';
import bodyParser from 'body-parser';

/* express middleware */
import morgan from 'morgan';  // HTTP REQUEST LOGGER
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import mongoose from 'mongoose';
import posts from './routes/index';

const config = require('../webpack.config');

const app = express();
const port = process.env.PORT || 3000;
const devPort = 3001;

if (process.env.NODE_ENV === 'development') {
  console.log('Server is running on development mode!!');

  const compiler = webpack(config);
  const devServer = new WebpackDevServer(compiler, config.devServer);
  devServer.listen(
    devPort, () => {
      console.log('webpack-dev-server is listening on port', devPort);
    }
  );
}

/* express server setting */
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('/', express.static(path.join(__dirname, './../dist')));
app.use(favicon(path.join(__dirname, './../assets/favicon.ico')));
app.use('/assets', express.static(path.join(__dirname, './../assets')));

/* db connection */
mongoose.connect('mongodb://localhost:27017/posts');

/* routes use */
app.use('/api', posts);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './../dist/index.html'));
});

app.listen(port, () => {
  console.log(`Express is listening to port ${port}`);
});
