import cors from "cors";
import express from "express";
import userRouter from "./routers/user";
import petRouter from "./routers/pet";

require("./db/db");

const port = process.env.PORT;

const app = express();

app.use(express.json());
app.use(cors());
app.use(userRouter);
app.use(petRouter);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
