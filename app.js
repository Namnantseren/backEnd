import express from "express";
import cors from "cors"
import product from './routes/product.js'
import bodyParser from "body-parser";
import { error } from "console";
// const fs = require("fs");

const app = express();
const port = 2000;

app.use(cors());
app.use(bodyParser.json());
app.use(product);
 
app.listen(port, () => {
    console.log("listen", port);
})

// app.get('http://localhost:2000/product',(request, response) => {
//     fs.readFile("SELECT products FROM temp_products",(req, data) => {
//         if(req) {
//             response.status(500).send({message : req})
//         }else{
//             response.json(JSON.parse(data))
//         }
//     })
// })