import express, { Request, Response } from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req : Request, res : Response): void => {
    res.send('API in Express used Typescript');
});

app.listen(PORT, (): void => {
    console.log(`http://localhost:${PORT}`);
});
