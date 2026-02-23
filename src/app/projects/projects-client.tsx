"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import type { ReactNode } from "react";

import type { Project } from "@/data/projects";

import { Button } from "@/components/button";
import { ProjectsList } from "@/components/projects-list";
import { Section } from "@/components/section";
import { SvgIconBack } from "@/components/svg-icon";
import { Typography } from "@/components/typography";

type ProjectsContentProps = {
  projects: Project[];
};

const ProjectsContent = ({ projects }: ProjectsContentProps) => {
  const t = useTranslations();

  return (
    <Section>
      <div className="space-y-16">
        <div className="space-y-8">
          <Link href="/" className="block">
            <Button startIcon={<SvgIconBack size="small" />}>
              <Typography variant="body1" color="inherit">
                {t("common.backToHome")}
              </Typography>
            </Button>
          </Link>

          <Typography variant="h1" display="block">
            {t.rich("posts.sometimesIBuild", {
              serif: (chunks: ReactNode) => (
                <span className="font-serif italic text-blue-500">
                  {chunks}
                </span>
              ),
            })}
          </Typography>
        </div>

        <ProjectsList projects={projects} />
      </div>
    </Section>
  );
};

export default ProjectsContent;
