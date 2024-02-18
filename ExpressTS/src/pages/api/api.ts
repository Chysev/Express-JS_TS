import { Request, Response, Router } from "express";

const api: Router = Router();

api.get("/", (req: Request, res: Response): void => {
  res.json({
    Name: "John Doe",
    Age: 21,
    Country: "US",
  });
});

export default api;
