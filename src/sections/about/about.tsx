"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useState, type ReactNode } from "react";

import { titleAnimation } from "@/utils/keyframes";
import { links } from "@/utils/links";

import { Section } from "@/components/section";
import { Typography } from "@/components/typography";

const About = () => {
  const t = useTranslations();
  const [imageError, setImageError] = useState(false);

  const renderers = {
    ai: (chunks: ReactNode) => <span className="text-blue-500">{chunks}</span>,
    ui: (chunks: ReactNode) => (
      <span className="relative inline-block text-blue-500">{chunks}</span>
    ),
    animation: (chunks: ReactNode) => (
      <span className="relative inline-block">{chunks}</span>
    ),
    serif: (chunks: ReactNode) => (
      <span className="font-serif italic">{chunks}</span>
    ),
    letterDown: (chunks: ReactNode) => (
      <motion.span
        variants={titleAnimation.letterDown}
        transition={titleAnimation.transition}
        className="absolute left-0 top-0 inline-block"
      >
        {chunks}
      </motion.span>
    ),
    letterUp: (chunks: ReactNode) => (
      <motion.span
        variants={titleAnimation.letterUp}
        transition={titleAnimation.transition}
        className="inline-block"
      >
        {chunks}
      </motion.span>
    ),

    url1: (chunks: ReactNode) => (
      <Link
        href={links.qed}
        className="text-blue-500"
        target="_blank"
        rel="noopener noreferrer"
      >
        {chunks}
      </Link>
    ),
    url2: (chunks: ReactNode) => (
      <Link
        href={links.sandbox}
        className="text-blue-500"
        target="_blank"
        rel="noopener noreferrer"
      >
        {chunks}
      </Link>
    ),
    url3: (chunks: ReactNode) => (
      <Link
        href={links.boxing}
        className="text-blue-500"
        target="_blank"
        rel="noopener noreferrer"
      >
        {chunks}
      </Link>
    ),
    url4: (chunks: ReactNode) => (
      <Link
        href={links.goodreads}
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
            <div className="absolute inset-0 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden border-4 border-blue-500">
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
                <div className="w-full h-full flex items-center justify-center bg-blue-100 text-blue-500 text-2xl sm:text-4xl font-bold">
                  ?
                </div>
              )}
            </div>
          </div>
        </div>

        <Typography variant="h1">
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
        </div>
      </motion.div>
    </Section>
  );
};

export default About;
