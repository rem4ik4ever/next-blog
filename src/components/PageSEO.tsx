import React, { useEffect } from "react";

import Head from "next/head";
import { NextSeo } from "next-seo";
import { PageInfo } from "src/interfaces/PageInfo";
import { pageview } from "src/utils/analytics/utils";

const PageSEO: React.FC<{ pageInfo: PageInfo }> = ({
  pageInfo
}) => {
  useEffect(() => {
    pageview(window.location.pathname);
  }, []);
  return <NextSeo {...pageInfo} />;
};

export default PageSEO;
