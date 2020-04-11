import ErrorPage from "next/error";
const CmsIndex = () => {
  if (process.env.NODE_ENV !== "development") {
    return <ErrorPage statusCode={404} />;
  }
  return <div>This will be cms route</div>;
};

export default CmsIndex;
