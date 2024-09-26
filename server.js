import express from "express";
import env from "dotenv";
import Routes from "./Routes/routes.js";
import connectDB from "./Connection/db.js";
env.config();

const app = express();
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", Routes());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
