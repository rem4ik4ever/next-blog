import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

const handler: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    res.statusCode = 200;
    res.end("Ok")
  } catch (err) {
    console.error(err);
    res.statusCode = 404;
    res.end();
  }
};

export default handler;
