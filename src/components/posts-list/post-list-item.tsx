import { format } from "date-fns";
import Link from "next/link";
import type { MouseEventHandler } from "react";
import { Chip, type ChipColor } from "@/components/chip";
import { Typography } from "@/components/typography";
import type { Post } from "@/lib/posts";
import { cn } from "@/utils/helpers";

type ChipColorLabelMapping = Record<Post["label"], ChipColor>;

const chipColorLabel: ChipColorLabelMapping = {
  Book: "info",
  LLMs: "success",
  Dev: "primary",
  TIL: "secondary",
};

type PostListItemProps = {
  slug: string;
  title: string;
  author?: string;
  createdAt: Date;
  label: Post["label"];
  externalUrl?: string;
  active: boolean;
  onMouseEnter: MouseEventHandler<HTMLAnchorElement>;
  onMouseLeave: MouseEventHandler<HTMLAnchorElement>;
};

const linkClassName = (active: boolean) =>
  cn(
    "group flex flex-col sm:flex-row gap-1.5 sm:justify-between py-3 transition-opacity ease-out-exponential",
    active ? "opacity-100" : "opacity-50"
  );

const PostListItem = ({
  slug,
  title,
  author,
  createdAt,
  label,
  externalUrl,
  active,
  onMouseEnter,
  onMouseLeave,
}: PostListItemProps) => {
  const content = (
    <>
      <div className="space-x-1 group-hover:text-blue-500">
        <Typography variant="body1" color="inherit" display="inline">
          {title}
        </Typography>
        {author ? (
          <Typography variant="subtitle1" color="inherit" display="inline">
            {author}
          </Typography>
        ) : null}
      </div>

      <div className="flex items-center gap-x-3">
        <Typography variant="body2" color="muted">
          {format(createdAt, "dd/MM")}
        </Typography>

        <Chip color={chipColorLabel[label]}>{label}</Chip>
      </div>
    </>
  );

  if (externalUrl) {
    return (
      <a
        href={externalUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClassName(active)}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      href={`/writings/${slug}`}
      className={linkClassName(active)}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {content}
    </Link>
  );
};

export default PostListItem;
