"use client";

import { useTranslations } from "next-intl";

import type { Project } from "@/data/projects";

import { Link } from "@/components/link";
import { ProjectsList } from "@/components/projects-list";
import { Section } from "@/components/section";
import { Typography } from "@/components/typography";

type ProjectsProps = {
  projects: Project[];
};

const Projects = ({ projects }: ProjectsProps) => {
  const t = useTranslations();

  return (
    <Section id="projects">
      <div className="space-y-16">
        <Typography variant="subtitle1">{t("projects.title")}</Typography>

        <div className="space-y-6">
          <ProjectsList projects={projects} />

          <div className="flex justify-end">
            <Link href="/projects">{t("posts.moreProjects")}</Link>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Projects;
