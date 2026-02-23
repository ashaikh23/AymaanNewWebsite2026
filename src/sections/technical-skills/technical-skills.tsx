"use client";

import { useTranslations } from "next-intl";

import { Section } from "@/components/section";
import { Typography } from "@/components/typography";

const TechnicalSkills = () => {
  const t = useTranslations();

  return (
    <Section id="technical-skills">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-16 sm:gap-6">
        <div className="col-span-1 sm:col-span-3">
          <Typography variant="subtitle1">
            {t("technicalSkills.title")}
          </Typography>
        </div>

        <div className="col-span-1 sm:col-span-9 space-y-2">
          <Typography variant="body1">
            <span className="font-medium">Languages:</span>{" "}
            {t("technicalSkills.languages")}
          </Typography>
          <Typography variant="body1">
            <span className="font-medium">Frameworks:</span>{" "}
            {t("technicalSkills.frameworks")}
          </Typography>
          <Typography variant="body1">
            <span className="font-medium">Technologies:</span>{" "}
            {t("technicalSkills.technologies")}
          </Typography>
        </div>
      </div>
    </Section>
  );
};

export default TechnicalSkills;
