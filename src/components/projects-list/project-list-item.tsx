import Link from "next/link";

import type { Project } from "@/data/projects";

import { Typography } from "@/components/typography";

type ProjectListItemProps = {
  project: Project;
};

const ProjectListItem = ({ project }: ProjectListItemProps) => {
  const firstBullet = project.bullets[0];

  const content = (
    <div className="group flex flex-col gap-2 sm:flex-row sm:items-stretch py-3 transition-opacity ease-out-exponential">
      <div className="sm:w-3/5 space-y-0.5 group-hover:text-blue-500">
        <Typography variant="body1" color="inherit" display="inline">
          {project.name}
        </Typography>
        {firstBullet ? (
          <div>
            <Typography variant="body2" color="muted">
              {firstBullet}
            </Typography>
          </div>
        ) : null}
      </div>

      <div className="hidden sm:block w-px bg-gray-200 mx-4" />

      <div className="sm:flex-1 flex items-center sm:justify-end mt-1 sm:mt-0">
        <Typography
          variant="small"
          color="muted"
          className="text-left sm:text-right"
        >
          {project.techStack}
        </Typography>
      </div>
    </div>
  );

  if (project.url) {
    return (
      <Link
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {content}
      </Link>
    );
  }

  return <div>{content}</div>;
};

export default ProjectListItem;
