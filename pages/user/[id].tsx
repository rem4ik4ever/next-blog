import { useRouter } from "next/router";
import useSWR from "swr";
import { Alert } from "@chakra-ui/core";

const fetcher = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw Error("Response is not good");
  }
  const data: {
    id: number;
    name: string;
  } = await res.json();

  return data;
};

const User = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data, error } = useSWR(`/api/user/${id}`, fetcher);

  if (error) {
    return <Alert status="error">{error.message}</Alert>;
  }

  if (!data) {
    <Alert status="info">Loading data...</Alert>;
  }
  return (
    <>
      <h2>User page {id}</h2>
      <pre>{JSON.stringify(data)}</pre>
    </>
  );
};

export default User;
