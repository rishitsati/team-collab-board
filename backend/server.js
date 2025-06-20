const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const boardRoutes = require("./routes/boardRoutes");
const taskRoutes = require("./routes/taskRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/boards", boardRoutes);
app.use("/tasks", taskRoutes);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Connected to MongoDB");
  app.listen(5001, () => console.log("Server running on port 5001"));
}).catch(err => console.error(err));
