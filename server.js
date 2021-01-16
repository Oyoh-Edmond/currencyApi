import  http from 'http';
import app from './my-app/app';

const port = process.env.Port || 8080;

const server = http.createServer(app);

server.listen(port);
