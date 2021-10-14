import products from "./data.js";
import once from "./conns/once.js";

once.connect().then((co) => {
  console.log(co, "hellon");
});
