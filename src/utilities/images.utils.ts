import sharp from "sharp";
import fetch from "node-fetch";

export const fetchAndTransformImageFromUrl = async (url: string, w: string) => {
  const payload = await fetch(String(url));
  let transform = sharp(await payload.buffer());
  if (w) {
    transform = transform.resize(+w);
  }
  transform = transform.png();
  return await transform.toBuffer();
};
