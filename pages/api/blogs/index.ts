import { NextApiHandler } from "next";
import fs from "fs";

const blog: NextApiHandler = (req, res) => {
  if (req.method === "POST") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(req.body));
  }
};

export default blog;
