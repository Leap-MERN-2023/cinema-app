import express, { Application, Request, Response } from "express";
import color from "colors";
import "dotenv/config";
import cors from "cors";

import { connectDB } from "./config/db";

import movie from "./router/movie";
import seats from "./router/seat";
import cinema from "./router/cinema";

const MONGO_URI = process.env.MONGO_URI as string;

connectDB(MONGO_URI);

const app: Application = express();
const PORT = process.env.PORT as string;

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  next();
});

app.use("/seats", seats);
app.use("/movie", movie);
app.use("/cinema", cinema);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello Express Server");
});

app.listen(PORT, () =>
  console.log(color.rainbow(`Server started at ${PORT} `))
);
