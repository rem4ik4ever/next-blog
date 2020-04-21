import ExperienceContent from "src/pages/experience/ExperienceContent";
import { NextPage } from "next";
import PageTitle from "src/components/PageTitle";

const ExperiencePage: NextPage = () => {
  return (
    <>
      <PageTitle title="Experience" />
      <ExperienceContent />;
    </>
  );
};

export default ExperiencePage;
