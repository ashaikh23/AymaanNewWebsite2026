"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";

import { Section } from "@/components/section";
import { Typography } from "@/components/typography";
import { links } from "@/utils/links";

const Certificates = () => {
  const t = useTranslations();

  const certificates = [
    {
      name: t("certificates.entries.1.name"),
      provider: t("certificates.entries.1.provider"),
      href: links.courseraCloud101,
    },
    {
      name: t("certificates.entries.2.name"),
      provider: t("certificates.entries.2.provider"),
      href: links.courseraGoogleCloudML,
    },
  ];

  return (
    <Section id="certificates">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-16 sm:gap-6">
        <div className="col-span-1 sm:col-span-3">
          <Typography variant="subtitle1">{t("certificates.title")}</Typography>
        </div>

        <div className="col-span-1 sm:col-span-9 space-y-6">
          {certificates.map((cert) => (
            <Link
              key={cert.name}
              href={cert.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="space-y-1">
                <Typography
                  variant="body1"
                  fontWeight="medium"
                  className="group-hover:text-blue-500 transition-colors"
                >
                  {cert.name}
                </Typography>
                <Typography variant="body2" color="muted">
                  {cert.provider}
                </Typography>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Certificates;
