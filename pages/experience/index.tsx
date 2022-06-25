import ExperienceContent from "src/pages/experience/ExperienceContent";
import { NextPage } from "next";
import PageSEO from "src/components/PageSEO";
import defaultConfig from "src/utils/SEO/next-seo.config";

const ExperiencePage: NextPage = () => {
  const config = {
    ...defaultConfig,
    title: "Experience",
    description: "My work experience"
  }
  return (
    <>
      <PageSEO pageInfo={config} />
      <ExperienceContent />
    </>
  );
};

export default ExperiencePage;
