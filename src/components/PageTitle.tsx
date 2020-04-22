import React, { useEffect } from "react";
import Head from "next/head";
import { initGA, logPageView } from "src/utils/analytics/utils";

const PageTitle = ({ title }) => {
  useEffect(() => {
    if (!window["GA_INITIALIZED"]) {
      initGA();
      window["GA_INITIALIZED"] = true;
    }
    logPageView();
  }, []);
  return (
    <Head>
      <title>Rem Kim | {title}</title>
    </Head>
  );
};

export default PageTitle;
