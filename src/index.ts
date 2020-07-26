import express from "express";
import { Request, Response } from "express";
import bodyParser from "body-parser";
//import compression from "compression";  // compresses requests
const app = express();
const port = 8080;

//app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get( "/", (req: Request, res: Response) => {
    res.send( "Hello world!");
} );

app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
});