import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { getProjects } from "@/data/projects";

import ProjectsContent from "@/app/projects/projects-client";

export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations();

  return {
    title: t("posts.title"),
  };
};

const ProjectsPage = async () => {
  const projects = getProjects();

  return <ProjectsContent projects={projects} />;
};

export default ProjectsPage;
