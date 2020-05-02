import { NextApiResponse } from "next";

const OK: string = "Ok";
const NOT_FOUND: string = "Not Found";
const BAD_RESPONSE: string = "Bad Response";

export const allGood = (res: NextApiResponse, payload: any = OK) => {
  res.statusCode = 200;
  res.end(payload);
};

export const whoops = (
  res: NextApiResponse,
  payload: any = NOT_FOUND,
  code: number = 404
) => {
  res.statusCode = code;
  res.end(payload);
};
