import ErrorPage from "next/error";
import dynamic from 'next/dynamic'

const EditForm = dynamic(() => import('src/pages/blog/BlogEdit') ,
                         { loading: () => <p>Loading...</p> })

const EditPage = () => {
 if (process.env.NODE_ENV !== "development") {
    return <ErrorPage statusCode={404} />;
  }
  return <EditForm />
};

export default EditPage;
