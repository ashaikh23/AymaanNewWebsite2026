"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";

import { Chip } from "@/components/chip";
import { Section } from "@/components/section";
import { Typography } from "@/components/typography";
import { links } from "@/utils/links";

const achievementKeys = ["1", "2", "3", "4", "5", "6", "7"] as const;

const Achievements = () => {
  const t = useTranslations();

  const achievements = achievementKeys
    .map((key) => ({
      key,
      text: t(`achievements.entries.${key}.text`),
      date: t(`achievements.entries.${key}.date`),
      sortDate: t(`achievements.entries.${key}.sortDate`),
      ...(key === "2" ? { linkText: "ChainBank", href: links.chainBank } : {}),
    }))
    .sort((a, b) => (b.sortDate < a.sortDate ? -1 : 1));

  return (
    <Section id="achievements">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-16 sm:gap-6">
        <div className="col-span-1 sm:col-span-3">
          <Typography variant="subtitle1">{t("achievements.title")}</Typography>
        </div>

        <div className="col-span-1 sm:col-span-9 space-y-4">
          {achievements.map((item) => (
            <div key={item.key} className="flex flex-row items-center gap-3">
              <div className="min-w-0 flex-1">
                {item.href && item.linkText ? (
                  <Typography variant="body1" color="muted">
                    {item.text.split(item.linkText)[0]}
                    <Link
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      {item.linkText}
                    </Link>
                    {item.text.split(item.linkText)[1]}
                  </Typography>
                ) : (
                  <Typography variant="body1" color="muted">
                    {item.text}
                  </Typography>
                )}
              </div>
              <div className="grow border-t border-gray-100 shrink-0 min-w-4" />
              <div className="shrink-0 min-w-[5.5rem] text-right">
                {item.date && item.date.trim() !== "" && (
                  <Chip variant="outlined">{item.date}</Chip>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Achievements;
