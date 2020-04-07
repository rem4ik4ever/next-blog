import { NextApiHandler } from "next";

const hello: NextApiHandler = (req, res) => {
  res.status(200).json({
    hello: "its me",
  });
};

export default hello;
