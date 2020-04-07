import { NextPage } from "next";
import Link from "next/link";

const AboutPage: NextPage = () => {
  return (
    <>
      <h1>About page</h1>
      <ul>
        <li>
          <Link href="/">
            <a>Index page</a>
          </Link>
        </li>
        <li>
          <Link href="/about/me">
            <a>About me</a>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default AboutPage;
