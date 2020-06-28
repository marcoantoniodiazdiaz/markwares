import Server from './classes/server';
import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import path from 'path';

// Rutas
import router from './routes/router';
import counter from './routes/counter.routes';

const server = Server.instance;

// BodyParser
server.app.use(bodyParser.urlencoded({ extended: true }));
server.app.use(bodyParser.json());

// ANGULAR
// server.app.use(express.static('public'));

// CORS
server.app.use(cors({ origin: true, credentials: true }));

// Rutas de MongoDB
server.app.use('/', (express.static('public', { redirect: false })));
server.app.use('/api', counter);
server.app.use('/api', router);
server.app.get('*', (req, res, next) => {
  res.sendFile(path.resolve('public/index.html'));
});



server.start(() => {
  console.log(`Servidor corriendo en el puerto ${server.port}`);
});
