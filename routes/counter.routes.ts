import { Router, Request, Response } from 'express';
import CounterSchema from '../classes/models/counter.model';
import { MongoError } from 'mongodb';

import { app } from './router';

app.get('/counter', /*[verificaToken],*/(req: Request, res: Response) => {
    CounterSchema.find().exec((err, data) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.json({
            ok: true,
            data
        });
    });
});

app.post('/counter', /*[verificaToken],*/(req: Request, res: Response) => {
    let body = req.body;

    let product = new CounterSchema({
        // date: body.date,
    });

    CounterSchema.create(product, (err: MongoError, data: any) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.json({
            ok: true,
            data
        });
    });
});

export default app;