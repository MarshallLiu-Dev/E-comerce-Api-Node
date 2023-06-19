// console.log("Teste de execução");

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// variaveis de ambiente
require("dotenv").config();
const routes = require("./routes/index");

const app = express();

mongoose.connect(
  process.env.MONGO_URI,
  {
    useUnifiedtopology: true,
    useNewUrlParser: true,
  },
  console.log("Connected to the database")
);
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(routes);

// Server
app.listen(PORT, () => {
  console.log(`Server is running at the URL http://localhost:${PORT}`);
});

// //ecommerce_api
