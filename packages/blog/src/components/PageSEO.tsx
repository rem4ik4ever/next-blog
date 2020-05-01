import React, { useEffect } from "react";
import Head from "next/head";
import { initGA, logPageView } from "src/utils/analytics/utils";
import { NextSeo } from "next-seo";
import { PageInfo } from "src/interfaces/PageInfo";

const PageSEO: React.FC<{ pageInfo: PageInfo }> = ({
  pageInfo
}) => {
  useEffect(() => {
    if (!window["GA_INITIALIZED"]) {
      initGA();
      window["GA_INITIALIZED"] = true;
    }
    logPageView();
  }, []);
  return <NextSeo {...pageInfo} />;
};

export default PageSEO;
