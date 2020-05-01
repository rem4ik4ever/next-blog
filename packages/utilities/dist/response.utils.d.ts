import { NextApiResponse } from "next";
export declare const allGood: (res: NextApiResponse<any>, payload?: any) => void;
export declare const whoops: (res: NextApiResponse<any>, payload?: any, code?: number) => void;
