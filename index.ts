import express, { Express, Request, Response } from 'express';
import { urlencoded } from 'body-parser';
import { action } from './utils/action';
import { clearOld } from './utils/clear';
import path from 'path';

const app: Express = express();
const port = 3000;

const urlencodedParser = urlencoded({ extended: false });

//clear old data
clearOld(3600*24*1000);

app.get("/*", function (req, res) {
  res.sendFile('index.html', { root: path.join(__dirname, '../files') });
});

app.post("/api", urlencodedParser, function (req:Request, res:Response) {
  action(req,res);
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});