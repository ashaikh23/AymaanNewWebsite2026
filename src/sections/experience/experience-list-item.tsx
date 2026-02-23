"use client";

import Link from "next/link";
import type { MouseEventHandler } from "react";
import { useTranslations } from "next-intl";

import { Chip } from "@/components/chip";
import { SvgIconDot } from "@/components/svg-icon";
import { Typography } from "@/components/typography";

export type ExperienceListItemProps = {
  title: string;
  role: string;
  duration?: string;
  description?: string;
  gradient?: string;
  href?: string;
  onMouseEnter?: MouseEventHandler<HTMLDivElement>;
  onMouseLeave?: MouseEventHandler<HTMLDivElement>;
};

const ExperienceListItem = ({
  title,
  role,
  duration,
  description,
  gradient,
  href,
  onMouseEnter,
  onMouseLeave,
}: ExperienceListItemProps) => {
  const t = useTranslations();

  const titleContent = href ? (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block hover:text-blue-500 transition-colors"
    >
      <Typography variant="body1" fontWeight="medium" color="inherit">
        {title}
      </Typography>
    </Link>
  ) : (
    <Typography variant="body1" fontWeight="medium">
      {title}
    </Typography>
  );

  const content = (
    <div className="space-y-1">
      {titleContent}

      <div className="flex flex-row items-center gap-3">
        <Typography variant="body1">{role}</Typography>

        <div className="grow border-t border-gray-100" />

        {duration ? (
          <Chip variant="outlined">{duration}</Chip>
        ) : (
          <div className="flex items-center gap-1">
            <SvgIconDot size="small" className="text-blue-500" />
            <Typography variant="body2">{t("experience.today")}</Typography>
          </div>
        )}
      </div>

      {description && (
        <Typography variant="body2" color="muted">
          {description}
        </Typography>
      )}
    </div>
  );

  if (gradient && onMouseEnter && onMouseLeave) {
    return (
      <div
        className="cursor-pointer rounded-lg px-2 py-1 -mx-2 -my-1 transition-colors"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {content}
      </div>
    );
  }

  return content;
};

export default ExperienceListItem;
