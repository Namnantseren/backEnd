import express from "express";
import { addProduct, getProduct,addLimit } from "../services/product-service.js";

const Router = express.Router();

// Router.get("/product", async (req, res) => {
//   // const { query} = req;
//   const result = await addProduct();
//   console.log(result)
//   res.status(200).send(result);
// });

Router.get("/product", async (req, res) => {
  // const { query} = req;
  const result = await getProduct();
  res.status(200).send(result);
});

Router.get("/products/limit", async (req, res) => {
  const givingLimit = req.query.limit;
  const result = await addLimit(givingLimit);
  res.status(200).send(result);
});
Router.post("/product/add", async (req, res)=>{
  const products = await addProduct(req.body.product);
  console.log(products)
})

export default Router;
