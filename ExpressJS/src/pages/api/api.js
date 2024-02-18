import express from "express";

const api = express.Router();

api.get("/", (req, res) => {
  res.json({
    Name: "John Doe",
    Age: "21",
    Country: "US",
  });
});

export default api;
