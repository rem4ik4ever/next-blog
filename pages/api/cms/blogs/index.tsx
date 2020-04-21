import { NextApiHandler } from "next";
import { getSlug, generateFilename, saveBlogFile } from "src/cms/blogs/utils";
import { BlogStatus } from "src/enums/BlogStatus";

const saveBlog = async (req, res) => {
  const timestamp = new Date().getTime();
  const payload = {
    ...req.body,
    author: "Rem Kim",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    slug: getSlug(req.body.title),
    status: BlogStatus.draft,
    id: timestamp
  };
  const filename = generateFilename(payload.title, timestamp);
  const result = await saveBlogFile(filename, payload);
  if (!result) {
    res.statusCode = 500;
    res.end();
  }
  res.statusCode = 200;
  res.end(JSON.stringify(payload, undefined, 2));
};

const handler: NextApiHandler = async (req, res) => {
  if (req.method === "POST") {
    saveBlog(req, res);
  }
};

export default handler;
