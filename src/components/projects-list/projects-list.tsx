"use client";

import type { Project } from "@/data/projects";

import { ProjectListItem } from "@/components/projects-list";

type ProjectsListProps = {
  projects: Project[];
};

const ProjectsList = ({ projects }: ProjectsListProps) => {
  return (
    <div className="border-b border-gray-100">
      {projects.map((project) => (
        <div key={project.id} className="border-t border-gray-100">
          <ProjectListItem project={project} />
        </div>
      ))}
    </div>
  );
};

export default ProjectsList;
