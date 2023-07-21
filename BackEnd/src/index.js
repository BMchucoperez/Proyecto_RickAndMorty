require("dotenv").config();
const { PORT, PASSWORD } = process.env;
const server = require("./app")

server.listen(PORT, () => {
   console.log('Server raised in port: ' + PORT);
});