import cors from "cors";
import path from "path";
import compression from "compression";
import express, { Express } from "express";

import apiRouter from "./pages/api/api";
import mainRouter from "./pages/routes/router";

const app: Express = express();

app.use(cors());
app.use(compression());
app.set("view cache", true);
app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "src/pages"));
app.use(express.static(path.join(process.cwd(), "public")));
app.use(express.static(path.join(process.cwd(), "src/pages/styles")));

// Router
app.get("/", mainRouter);

// Router Api
app.use("/api", apiRouter);

app.listen(3000, () => {
  console.log("Express TS is running at: http://localhost:3000");
});
