import "@babel/polyfill";
import path from "path";
import express from "express";
import bodyParser from "body-parser"; 
import cors from 'cors';

import routes from './routes';


const app = express();
app.use(cors());
//API CONFIG (PORT - ENCODING)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('port', process.env.PORT || 3001);
///API ROUTES
app.use("/api", routes);


// GO LIVE
app.listen(app.get("port"), async (req, res) => {
  console.log("Magic happens on port: ", process.env.PORT || 3001);
});