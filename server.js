import express from "express";
import router from "./routes/ContactRoutes.js";
import { errorHandler } from "./middleware/errorHandler.js";
import {connectDB} from "./config/dbConnection.js";

connectDB();
const app = express();
app.use(express.json());
const port = 5000;
app.use("/api/contacts", router);
app.use(errorHandler);
app.listen(port, () => {
    console.log("server running on port 5000");
});
