import express from "express";
import db from "./config/database.js";
import Routes from "./routes/index.js";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());
app.use('/', Routes);
app.listen(5001, () => console.log('Server running at port 5001'));