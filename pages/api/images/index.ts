import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import fetch from "node-fetch";
const sharp = require("sharp");

const handler: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const { source, w } = req.query;
    console.log("Source", source)
    if (!source) {
      res.statusCode = 404;
      res.end("Missing URL");
    }
    const payload = await fetch(String(source));
    let transform = sharp(await payload.buffer());
    if (w) {
      transform = transform.resize(+w);
    }
    res.statusCode = 200;
    res.end(await transform.toBuffer());
  } catch (err) {
    console.error(err);
    res.statusCode = 500;
    res.end();
  }
};

export default handler;
