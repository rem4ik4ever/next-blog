async function devonlyMiddleware(req, res) {
  return new Promise((resolve, reject) => {
    if (process.env.NODE_ENV !== "development") {
      res.statusCode = 404;
      res.end();
      reject("Dev Only Middleware")
    } else {
      resolve("Success")
    }
  });
}

export default devonlyMiddleware;
