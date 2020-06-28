import express from 'express';
import { SERVER_PORT } from '../global/environment';
import http from 'http';
import mongoose from 'mongoose';
import { MongoError } from 'mongodb';

export default class Server {
  private static _instance: Server;
  public app: express.Application;
  public port: number;

  private httpServer: http.Server;

  private constructor() {
    this.app = express();
    this.port = SERVER_PORT;

    this.httpServer = new http.Server(this.app);
    this.mongoConnect();
  }

  public static get instance() {
    return this._instance || (this._instance = new this());
  }

  private mongoConnect() {
    // 'mongodb://localhost:27017/marcoadiaz'
    // 
    mongoose.connect('mongodb+srv://marco_diaz:pataPON3@cluster0-jm5fl.mongodb.net/marcoadiaz?retryWrites=true&w=majority',
      { useNewUrlParser: true, useCreateIndex: true },
      (err: MongoError) => {
        if (err) throw err;
        //console.log('ATLAS conectado.');
      }
    );
  }

  start(callback: Function) {
    this.httpServer.listen(this.port, callback);
  }
}
