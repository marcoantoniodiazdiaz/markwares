import { Router, Request, Response } from 'express';
import { json } from 'body-parser';

const { exec } = require("child_process");
const app = Router();

export { app };

app.get('/status', (req: Request, res: Response) => {
    res.json({
        ok: true,
        data: 'RUNNING'
    });
});

app.get('/process', (req: Request, res: Response) => {

    exec("pm2 jlist", (error: any, stdout: any, stderr: any) => {
        if (error) {
            return res.status(400).json({
                ok: true,
                data: error.message
            });
        }
        if (stderr) {
            return res.status(400).json({
                ok: true,
                data: stderr.message
            });
        }
        return res.json({
            ok: true,
            data: JSON.parse(stdout),
        });
    });
});


export default app;