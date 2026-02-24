"use client";

import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";

import { Chip } from "@/components/chip";
import { Section } from "@/components/section";
import { Typography } from "@/components/typography";

const COURSEWORK_HOVER_COLORS = [
  "#dbeafe",
  "#fce7f3",
  "#d1fae5",
  "#fef3c7",
  "#e0e7ff",
  "#ffedd5",
  "#e5e7eb",
  "#f3e8ff",
  "#ccfbf1",
  "#fed7aa",
  "#bfdbfe",
  "#fbcfe8",
  "#a7f3d0",
  "#fde68a",
  "#c7d2fe",
  "#fdba74",
  "#d1d5db",
  "#e9d5ff",
  "#99f6e4",
  "#fcd34d",
  "#93c5fd",
  "#f9a8d4",
  "#6ee7b7",
];

const COURSEWORK_KEYS = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
] as const;

const Education = () => {
  const t = useTranslations();
  const [hoveredCourseworkKey, setHoveredCourseworkKey] = useState<
    string | null
  >(null);

  const entries = [
    {
      school: t("education.entries.1.school"),
      location: t("education.entries.1.location"),
      degree: t("education.entries.1.degree"),
      date: t("education.entries.1.date"),
    },
    {
      school: t("education.entries.2.school"),
      location: t("education.entries.2.location"),
      degree: t("education.entries.2.degree"),
      date: t("education.entries.2.date"),
    },
  ];

  const [showAllCoursework, setShowAllCoursework] = useState(false);

  const visibleCourseworkKeys = showAllCoursework
    ? COURSEWORK_KEYS
    : COURSEWORK_KEYS.slice(0, 6);

  const courseworkColorByKey = useMemo(() => {
    const map: Record<string, string> = {};
    COURSEWORK_KEYS.forEach((key, i) => {
      map[key] = COURSEWORK_HOVER_COLORS[i % COURSEWORK_HOVER_COLORS.length];
    });
    return map;
  }, []);

  return (
    <Section id="education">
      <div className="space-y-16">
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-16 sm:gap-6">
          <div className="col-span-1 sm:col-span-3">
            <Typography variant="subtitle1">{t("education.title")}</Typography>
          </div>

          <div className="col-span-1 sm:col-span-9 space-y-6">
            {entries.map((entry) => (
              <div key={entry.school} className="space-y-1">
                <Typography variant="body1" fontWeight="medium">
                  {entry.school}
                </Typography>
                <div className="flex flex-row flex-wrap items-center gap-2 sm:gap-3">
                  <span className="flex items-baseline gap-2">
                    <Typography variant="body1">{entry.degree}</Typography>
                    <Typography variant="body2" color="muted">
                      {entry.location}
                    </Typography>
                  </span>
                  <div className="grow border-t border-gray-100 min-w-4" />
                  <Chip variant="outlined" className="shrink-0">
                    {entry.date}
                  </Chip>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-12 gap-16 sm:gap-6">
          <div className="col-span-1 sm:col-span-3">
            <Typography variant="subtitle1">
              {t("education.courseworkTitle")}
            </Typography>
          </div>

          <div className="col-span-1 sm:col-span-9 space-y-3">
            <div className="flex flex-wrap gap-2">
              {visibleCourseworkKeys.map((key) => (
                <div
                  key={key}
                  className="rounded-3xl transition-colors duration-200"
                  style={{
                    backgroundColor:
                      hoveredCourseworkKey === key
                        ? courseworkColorByKey[key]
                        : undefined,
                  }}
                  onMouseEnter={() => setHoveredCourseworkKey(key)}
                  onMouseLeave={() => setHoveredCourseworkKey(null)}
                >
                  <Chip variant="outlined">
                    {t(`education.coursework.${key}`)}
                  </Chip>
                </div>
              ))}
            </div>

            {COURSEWORK_KEYS.length > 6 && (
              <button
                type="button"
                onClick={() => setShowAllCoursework((v) => !v)}
                className="text-base text-blue-500 hover:text-blue-400 underline underline-offset-4"
              >
                {showAllCoursework
                  ? "Show fewer courses"
                  : "Show all coursework"}
              </button>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Education;
