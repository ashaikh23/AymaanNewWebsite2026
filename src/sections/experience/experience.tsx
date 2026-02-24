"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

import { links } from "@/utils/links";

import { Section } from "@/components/section";
import { Typography } from "@/components/typography";
import { ExperienceListItem } from "@/sections/experience";

const COMPANY_GRADIENTS: Record<string, string> = {
  Microsoft: "linear-gradient(135deg, #0078D4 0%, #00BCF2 100%)",
  Verizon: "linear-gradient(135deg, #CD040B 0%, #FF6B6B 100%)",
  "Fidelity Investments": "linear-gradient(135deg, #01754F 0%, #00A86B 100%)",
};

const Experience = () => {
  const t = useTranslations();
  const [hoveredGradient, setHoveredGradient] = useState<string | null>(null);

  const industryJobs = [
    {
      title: t("experience.jobs.industry.1.title"),
      role: t("experience.jobs.industry.1.role"),
      duration: t("experience.jobs.industry.1.duration"),
      description: t("experience.jobs.industry.1.description"),
    },
    {
      title: t("experience.jobs.industry.2.title"),
      role: t("experience.jobs.industry.2.role"),
      duration: t("experience.jobs.industry.2.duration"),
      description: t("experience.jobs.industry.2.description"),
    },
    {
      title: t("experience.jobs.industry.3.title"),
      role: t("experience.jobs.industry.3.role"),
      duration: t("experience.jobs.industry.3.duration"),
      description: t("experience.jobs.industry.3.description"),
    },
  ];

  const researchJobs = [
    {
      title: t("experience.jobs.research.1.title"),
      role: t("experience.jobs.research.1.role"),
      duration: t("experience.jobs.research.1.duration"),
      description: t("experience.jobs.research.1.description"),
    },
    {
      title: t("experience.jobs.research.2.title"),
      role: t("experience.jobs.research.2.role"),
      duration: t("experience.jobs.research.2.duration"),
      description: t("experience.jobs.research.2.description"),
    },
    {
      title: t("experience.jobs.research.3.title"),
      role: t("experience.jobs.research.3.role"),
      duration: t("experience.jobs.research.3.duration"),
      description: t("experience.jobs.research.3.description"),
    },
    {
      title: t("experience.jobs.research.4.title"),
      role: t("experience.jobs.research.4.role"),
      duration: t("experience.jobs.research.4.duration"),
      description: t("experience.jobs.research.4.description"),
    },
  ];

  const ambassadorshipsJobs = [
    {
      title: t("experience.jobs.ambassadorships.1.title"),
      role: t("experience.jobs.ambassadorships.1.role"),
      href: links.cornell,
    },
    {
      title: t("experience.jobs.ambassadorships.2.title"),
      role: t("experience.jobs.ambassadorships.2.role"),
      duration: t("experience.jobs.ambassadorships.2.duration"),
    },
  ];

  useEffect(() => {
    const bodyElement = document.body;
    const mainElement = document.querySelector("main");

    if (hoveredGradient) {
      bodyElement.style.background = hoveredGradient;
      bodyElement.style.transition =
        "background 0.4s cubic-bezier(0.4, 0, 0.2, 1)";
      if (mainElement) {
        (mainElement as HTMLElement).style.background = hoveredGradient;
        (mainElement as HTMLElement).style.transition =
          "background 0.4s cubic-bezier(0.4, 0, 0.2, 1)";
      }
    } else {
      bodyElement.style.background = "#0e63ff";
      bodyElement.style.transition =
        "background 0.4s cubic-bezier(0.4, 0, 0.2, 1)";
      if (mainElement) {
        (mainElement as HTMLElement).style.background = "white";
        (mainElement as HTMLElement).style.transition =
          "background 0.4s cubic-bezier(0.4, 0, 0.2, 1)";
      }
    }
  }, [hoveredGradient]);

  return (
    <Section id="experience">
      <div className="space-y-16">
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-16 sm:gap-6">
          <div className="col-span-1 sm:col-span-3">
            <Typography variant="subtitle1">
              {t("experience.industryTitle")}
            </Typography>
          </div>

          <div className="col-span-1 sm:col-span-9 space-y-6">
            {industryJobs.map((job) => (
              <ExperienceListItem
                key={job.title}
                title={job.title}
                role={job.role}
                duration={job?.duration}
                description={job?.description}
                gradient={COMPANY_GRADIENTS[job.title]}
                onMouseEnter={() =>
                  setHoveredGradient(COMPANY_GRADIENTS[job.title] ?? null)
                }
                onMouseLeave={() => setHoveredGradient(null)}
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-12 gap-16 sm:gap-6">
          <div className="col-span-1 sm:col-span-3">
            <Typography variant="subtitle1">
              {t("experience.researchTitle")}
            </Typography>
          </div>

          <div className="col-span-1 sm:col-span-9 space-y-6">
            {researchJobs.map((job) => (
              <ExperienceListItem
                key={job.title}
                title={job.title}
                role={job.role}
                duration={job?.duration}
                description={job?.description}
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-12 gap-16 sm:gap-6">
          <div className="col-span-1 sm:col-span-3">
            <Typography variant="subtitle1">
              {t("experience.ambassadorshipsTitle")}
            </Typography>
          </div>

          <div className="col-span-1 sm:col-span-9 space-y-6">
            {ambassadorshipsJobs.map((job) => (
              <ExperienceListItem
                key={job.title}
                title={job.title}
                role={job.role}
                duration={job?.duration}
                href={job?.href}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Experience;
