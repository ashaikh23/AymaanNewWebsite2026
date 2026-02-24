"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useState, type ReactNode } from "react";

import { RotatingText } from "@/components/rotating-text";
import { links } from "@/utils/links";

import { Section } from "@/components/section";
import { Typography } from "@/components/typography";

const About = () => {
  const t = useTranslations();
  const [imageError, setImageError] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const renderers = {
    ai: (chunks: ReactNode) => <span className="text-blue-500">{chunks}</span>,
    ui: (chunks: ReactNode) => (
      <span className="relative inline-block text-blue-500">{chunks}</span>
    ),
    rotating: () => <RotatingText />,
    serif: (chunks: ReactNode) => (
      <span className="font-serif italic">{chunks}</span>
    ),
    smaller: (chunks: ReactNode) => (
      <span className="text-2xl leading-8 sm:text-3xl sm:leading-9">
        {chunks}
      </span>
    ),
    url5: (chunks: ReactNode) => (
      <Link
        href={links.research}
        className="text-blue-500"
        target="_blank"
        rel="noopener noreferrer"
      >
        {chunks}
      </Link>
    ),
    url6: (chunks: ReactNode) => (
      <Link
        href={links.fidelity}
        className="text-blue-500"
        target="_blank"
        rel="noopener noreferrer"
      >
        {chunks}
      </Link>
    ),
    url7: (chunks: ReactNode) => (
      <Link
        href={links.verizon}
        className="text-blue-500"
        target="_blank"
        rel="noopener noreferrer"
      >
        {chunks}
      </Link>
    ),
    url8: (chunks: ReactNode) => (
      <Link
        href={links.billiards}
        className="text-blue-500"
        target="_blank"
        rel="noopener noreferrer"
      >
        {chunks}
      </Link>
    ),
  };

  return (
    <Section id="about">
      <motion.div className="space-y-8" initial="rest" whileHover="hover">
        <div className="flex flex-col items-center gap-8">
          <div className="relative w-32 h-32 sm:w-40 sm:h-40">
            <motion.div
              className="absolute inset-0 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden border-4 border-blue-500"
              whileHover={
                shouldReduceMotion ? undefined : { rotate: 360, scale: 1.08 }
              }
              transition={{
                type: "tween",
                duration: 0.55,
                ease: "easeInOut",
              }}
            >
              {!imageError ? (
                <Image
                  src="/images/headshot/profile.jpg"
                  alt="Profile picture"
                  width={160}
                  height={160}
                  className="w-full h-full object-cover"
                  onError={() => setImageError(true)}
                  priority
                  unoptimized
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-blue-100 text-blue-500 text-3xl sm:text-5xl font-bold">
                  ?
                </div>
              )}
            </motion.div>
          </div>
        </div>

        <Typography
          variant="h1"
          className="text-3xl leading-9 sm:text-4xl sm:leading-12"
        >
          <motion.span className="whitespace-break-spaces">
            {t.rich("about.title", renderers)}
          </motion.span>
        </Typography>

        <div className="space-y-4">
          <Typography variant="body1">
            {t.rich("about.description.0", renderers)}
          </Typography>
          <Typography variant="body1">
            {t.rich("about.description.1", renderers)}
          </Typography>
          <Typography variant="body1">
            {t.rich("about.description.2", renderers)}
          </Typography>
          <Typography variant="body1">
            {t.rich("about.description.3", renderers)}
          </Typography>
          <Typography variant="body1">
            {t.rich("about.description.4", renderers)}
          </Typography>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/resume"
            className="inline-block cursor-pointer rounded-sm px-2 py-1 text-gray-600 hover:bg-blue-500 hover:text-white transition-colors transition-transform ease-in transform hover:scale-105 hover:shadow-md"
          >
            <Typography variant="body1" color="inherit">
              {t("about.viewResume")}
            </Typography>
          </Link>
          <a
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block cursor-pointer rounded-sm px-2 py-1 text-gray-600 hover:bg-blue-500 hover:text-white transition-colors transition-transform ease-in transform hover:scale-105 hover:shadow-md"
          >
            <Typography variant="body1" color="inherit">
              {t("about.linkedin")}
            </Typography>
          </a>
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block cursor-pointer rounded-sm px-2 py-1 text-gray-600 hover:bg-blue-500 hover:text-white transition-colors transition-transform ease-in transform hover:scale-105 hover:shadow-md"
          >
            <Typography variant="body1" color="inherit">
              {t("about.github")}
            </Typography>
          </a>
        </div>
      </motion.div>
    </Section>
  );
};

export default About;
