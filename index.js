import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import connectDB from "./db/connection.js";
import taskRoutes from "./routers/taskRoutes.js";

dotenv.config();

const app = express();

const port = process.env.PORT;
const dbstring = process.env.DBSTRING;
const dbname = process.env.DBNAME;

connectDB(dbstring, dbname);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/task", taskRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
