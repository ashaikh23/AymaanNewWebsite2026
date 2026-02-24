import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import groupBy from "lodash.groupby";
import take from "lodash.take";
import { getYear } from "date-fns/getYear";
import { compareDesc } from "date-fns/compareDesc";

import { isNullOrUndefined } from "@/utils/helpers";

export type Post = {
  slug: string;
  title: string;
  author?: string;
  createdAt: Date;
  label: "Book" | "LLMs" | "Dev" | "TIL";
  externalUrl?: string;
};

const postsDir = path.join(process.cwd(), "src/content/posts");

export const getPosts = (limit?: number) => {
  const fileNames = fs
    .readdirSync(postsDir)
    .filter((fileName) => fileName.endsWith(".md"));

  const posts = fileNames
    .map((fileName) => {
      const fileSlug = path.parse(fileName).name;
      const filePath = path.join(postsDir, fileName);
      const fileContents = fs.readFileSync(filePath, "utf8");

      const {
        data: { title, createdAt, author, label, externalUrl },
      } = matter(fileContents);

      return {
        title,
        createdAt,
        author,
        label,
        slug: fileSlug,
        externalUrl,
      };
    })
    .sort((post1, post2) => compareDesc(post1.createdAt, post2.createdAt));

  const result = limit ? take(posts, limit) : posts;

  return groupBy<Post>(result, (post) => getYear(post.createdAt));
};

export const getPostSlugs = () => {
  const fileNames = fs
    .readdirSync(postsDir)
    .filter((fileName) => fileName.endsWith(".md"));

  const slugs: string[] = [];
  for (const fileName of fileNames) {
    const fileSlug = path.parse(fileName).name;
    const filePath = path.join(postsDir, fileName);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);
    if (!data.externalUrl) {
      slugs.push(fileSlug);
    }
  }
  return slugs;
};

export const getPost = (slug?: string | string[]) => {
  if (isNullOrUndefined(slug)) {
    return;
  }

  try {
    const filePath = path.join(postsDir, `${slug}.md`);
    const fileContents = fs.readFileSync(filePath, "utf8");

    const {
      content,
      data: { title, createdAt, author, label },
    } = matter(fileContents);

    return {
      title,
      createdAt,
      author,
      label,
      slug,
      content,
    };
  } catch {}
};
