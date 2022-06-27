import { NextApiHandler, NextApiResponse, NextApiRequest } from "next";
import { addSubscriptionEmail } from "src/api/subscribe";

const subscribe = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const {email} = req.body
    if(!email){
      res.statusCode = 500
      res.end("email is missing")
      return
    } 
    await addSubscriptionEmail(email)
    res.statusCode = 200;
    res.end(JSON.stringify({success: true}))
  } catch (error) {
    console.error(error.message)
    res.statusCode = 500;
    res.end(JSON.stringify({success: false}));
  }
};

const subscribeEmail: NextApiHandler = async (req, res) => {
  if (req.method === "POST") {
    await subscribe(req, res);
  } else {
    res.statusCode = 404;
    res.end()
  }
};

export default subscribeEmail;
