// Provides config for the app in conjunction with dotenv
// Config is the only place accesses 'dotenv'
import dotenv from "dotenv";

dotenv.config();
// check the env for a port, if you dont find use 300
export default {
  db: {
    clientURL: process.env.DB_CLIENT_URL,
    collection: "products",
    name: "products",
  },

  port: process.env.PORT || 3000,
};
