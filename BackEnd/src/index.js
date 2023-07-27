require("dotenv").config();
const { PORT, DB_USER } = process.env;
const server = require("./app")
const { conn } = require('./DB_connection');

conn
  .sync({ alter: true })
  .then((value) => {
    server.listen(PORT, () => {
      console.log("Server & DDBB Running ✅");
    });
  })
  .catch((err) => console.error(err));