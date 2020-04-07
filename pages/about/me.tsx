import { NextPage } from "next";
import Link from "next/link";

const MePage: NextPage = () => {
  return (
    <>
      <h1>About ME page</h1>
      <Link href="/about">
        <a>About page</a>
      </Link>
    </>
  );
};

export default MePage;
