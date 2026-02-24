"use client";

import { useTranslations } from "next-intl";

import { galleryImages } from "@/data/photography";

import { Gallery } from "@/components/gallery";
import { Section } from "@/components/section";
import { Typography } from "@/components/typography";

const Photography = () => {
  const t = useTranslations();

  return (
    <Section id="photography">
      <div className="space-y-16">
        <Typography variant="subtitle1">{t("photography.title")}</Typography>

        <Gallery images={galleryImages} />
      </div>
    </Section>
  );
};

export default Photography;
