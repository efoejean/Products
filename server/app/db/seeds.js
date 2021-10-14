import productsData from "./data.js";
import once from "./conns/once.js";

// Asynchronous Anonymous IIFE - Immediately Invoked Function Expression.

(async () => {
  const conn = await once.connect();
  await conn.db("products").collection("products").deleteMany({});
  await conn.db("products").collection("products").insertMany(productsData);
  conn.close();
})();
