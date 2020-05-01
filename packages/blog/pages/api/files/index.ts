import { NextApiHandler, NextApiResponse, NextApiRequest } from 'next';
import { File } from 'src/interfaces/File';
import { v4 } from 'uuid';
import fs from 'fs';
import devonlyMiddleware from 'src/middlewares/devonly.middleware';
import utilities from '@rem-blog/utilities';

const uploadFile = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await devonlyMiddleware(req, res);
    const { name, filetype, size, url } = req.body;
    const id = v4();
    let file: File = {
      name,
      filetype,
      size,
      url,
      id,
      createdAt: new Date().toISOString()
    };
    utilities.Files.writeJSONToFile('./data/assets', file);
    res.statusCode = 200;
    res.end(JSON.stringify(file));
  } catch (error) {
    res.statusCode = 500;
    res.end();
  }
};

const listFiles = async (_: NextApiRequest, res: NextApiResponse) => {
  try {
    const files = utilities.Files.allFiles();
    res.statusCode = 200;
    res.end(JSON.stringify(files));
  } catch (error) {
    res.statusCode = 404;
    res.end();
  }
};

const files: NextApiHandler = async (req, res) => {
  if (req.method === 'POST') {
    await uploadFile(req, res);
  } else {
    await listFiles(req, res);
  }
};

export default files;
