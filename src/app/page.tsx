import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { getProjects } from "@/data/projects";

import { PROJECTS_LIMIT } from "@/utils/const";

import { About } from "@/sections/about";
import { Achievements } from "@/sections/achievements";
import { Certificates } from "@/sections/certificates";
import { HobbiesAndInterests } from "@/sections/hobbies-and-interests";
import { Companies } from "@/sections/companies";
import { Commits } from "@/sections/commits";
import { Education } from "@/sections/education";
import { TechnicalSkills } from "@/sections/technical-skills";
import { Experience } from "@/sections/experience";
import { Projects } from "@/sections/projects";

export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations();

  return {
    title: t("metadata.title"),
  };
};

const Home = async () => {
  const projects = getProjects(PROJECTS_LIMIT);

  return (
    <>
      <About />
      <Education />
      <TechnicalSkills />
      <Companies />
      <Experience />
      <Commits />
      <Projects projects={projects} />
      <Certificates />
      <Achievements />
      <HobbiesAndInterests />
    </>
  );
};

export default Home;
