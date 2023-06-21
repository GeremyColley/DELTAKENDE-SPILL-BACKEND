require("dotenv").config(); // Librairy pour les variables global
const express = require("express"); // framework de node.js 
const mongoose = require("mongoose"); // framework de NoSQL
const cors = require("cors");
const morgan = require("morgan");

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGODB);

const userRoutes = require("./routes/user");
app.use(userRoutes);

app.get("/", (req, res) => {
  res.json({message : "Bienvenue sur L'API de deltakende"});
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server has started");
})