import productsData from "./data.js";
import once from "./conns/once.js";

// Create a databases with the connection from seeds with mongoaltas.
//
once
  .connect()
  .then((connection) =>
    connection.db("products").collection("products").insertMany(productsData)
  )
  .then(() => {
    once.close();
  });
