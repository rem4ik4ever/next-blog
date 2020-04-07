import { NextApiHandler } from "next";
import data from "./data";

const user: NextApiHandler = (req, res) => {
  const { id } = req.query;
  const userData = data.find((entry) => String(entry.id) === String(id));

  if (userData) {
    res.status(200).json(userData);
  } else {
    res.status(400).end();
  }
};

export default user;
