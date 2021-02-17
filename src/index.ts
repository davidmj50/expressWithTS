//modulos de nucleo
import express, { Application, Request, Response } from 'express';

import { urlencoded, json } from 'body-parser';
// import phone from 'phone';

// var fs  = require('fs');
// var path = require('path');

import apiV1 from './routes/V1';

const PORT = 5000;
const app: Application = express();
app.use(urlencoded({extended: false}));
app.use(json());

apiV1(app);

//solo con get, el app.use() sirve con los demas metodos http put, delete, post, get
app.use((req: Request, res: Response) => {
    res.status(404).send("NOT FOUND");
});

app.listen(PORT, () => {
    console.log("Running on ", PORT);
});
