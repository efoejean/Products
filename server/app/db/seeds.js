import config from "../config.js";
import productsData from "./data.js";
import once from "./conns/once.js";

// Asynchronous Anonymous IIFE - Immediately Invoked Function Expression.

// Destructuring base on the config.js
const {
  db: { name, collection },
} = config;

(async () => {
  const conn = await once.connect();
  await conn.db(name).collection(collection).deleteMany({});
  await conn.db(name).collection(collection).insertMany(productsData);
  conn.close();
})();
