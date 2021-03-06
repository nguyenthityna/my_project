import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import config from './config';
import routes from './routes';

let app = express();
app.server = http.createServer(app);

// middleware

app.use(bodyParser.json({
  limit : config.bodyLimit
}));

// passport config

// api routes v1
app.use('/api/v1', routes);

app.server.listen(config.port,"localhost");

console.log(`Started on port ${app.server.address}`);

export default app;
