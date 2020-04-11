import { GetServerSideProps, NextPage } from "next";
import fetch from "node-fetch";
import ErrorPage from "next/error";
type Data = {
  id: string;
  name: string;
};

const UserPage: NextPage<{ data: Data }> = (props) => {
  if (!props.data) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <>
      <h2>User page {props.data.id}</h2>
      <pre>{JSON.stringify(props.data)}</pre>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  params,
  res,
}) => {
  try {
    const { id } = params;
    const result = await fetch(`${process.env.HOST_URL}/api/user/${id}`);
    const data: Data = await result.json();

    return {
      props: {
        data,
      },
    };
  } catch (err) {
    res.statusCode = 404;
    return {
      props: {},
    };
  }
};

export default UserPage;
