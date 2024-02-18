import cors from "cors";
import { join } from "path";
import express from "express";
import compression from "compression";

import apiRouter from "./pages/api/api.js";
import mainRouter from "./pages/routes/router.js";

const app = express();

app.use(cors());
app.use(compression());
app.set("view cache", true);
app.set("view engine", "ejs");
app.set("views", join(process.cwd(), "src/pages"));
app.use(express.static(join(process.cwd(), "public")));
app.use(express.static(join(process.cwd(), "src/pages/styles")));

// Router
app.get("/", mainRouter);
// Router Api
app.use("/api", apiRouter);

app.listen(3000, () => {
  console.log("Express JS is running at: http://localhost:3000");
});
