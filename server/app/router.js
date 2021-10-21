import Router from "express";
import config from "./config.js";
import client from "./db/conns/clients.js";
import { ObjectId } from "mongodb";

const collection = client.db(config.db.name).collection(config.db.collection);

const router = new Router();

// Localhost:3000/api
router.get("/", (_, res) => {
  res.send("Hello from api router!");
});

// localhost:3000/api/products

router.get("/products", async (_, res) => {
  const products = await collection.find().toArray();
  res.json(products);
});

// get the details for one spefic product by ID

router.get("/products/:id", async (req, res) => {
  const products = await collection.findOne({ _id: ObjectId(req.params.id) });
  res.json(products);
});

// send a products

router.post("/products", async (req, res) => {
  const createdProduct = await collection.insertOne(req.body);
  res.json(createdProduct);
});

// Delete product by id
router.delete("/products", async (req, res) => {
  const deleteProduct = await collection.deleteOne({
    _id: ObjectId(req.body.id),
  });
  res.json(deleteProduct);
});
// TODO: add.router.put().for.updating

export default router;
