import { Router, Request, Response } from 'express';

const app = Router();

export { app };

app.get('/status', (req: Request, res: Response) => {
    res.json({
        ok: true,
        data: 'RUNNING'
    });
});

export default app;