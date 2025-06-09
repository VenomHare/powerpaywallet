import express, { Application } from "express";
import dotenv from "dotenv";
import v1Router from "./v1";

dotenv.config();
const PORT = process.env.WEBHOOK_PORT || 3002;

const app : Application = express();
app.use(express.json());
app.use((req, _, next) => {
    console.log([req.method, req.url, JSON.stringify(req.body)].join(" "));
    next();
})

app.use("/v1", v1Router);

app.listen(PORT, () => {
    console.log("Webhook is running on port " + PORT);
})

export default app