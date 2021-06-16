const express = require("express");
const app = express();
const cors = require("cors");
const ctrl = require("../controller");
const gradient = require("gradient-string");

const { getAllHouses, deleteHouse, createHouse, updateHouse } = ctrl;

app.use(express.json());
app.use(cors());

app.get("/api/houses", getAllHouses);
app.post("/api/houses", createHouse);
app.put("/api/houses/:id", updateHouse);
app.delete("/api/houses/:id", deleteHouse);

const SERVER_PORT = 4004;
app.listen(SERVER_PORT, function () {
  console.log(gradient.instagram(`Server blazing on ${SERVER_PORT}`));
});
