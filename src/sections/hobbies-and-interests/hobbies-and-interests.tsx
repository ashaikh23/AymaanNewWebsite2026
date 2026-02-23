"use client";

import { useTranslations } from "next-intl";

import { Chip } from "@/components/chip";
import { Section } from "@/components/section";
import { Typography } from "@/components/typography";

const HOBBIES_KEYS = ["1", "2"] as const;

const HobbiesAndInterests = () => {
  const t = useTranslations();

  return (
    <Section id="hobbies-and-interests">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-16 sm:gap-6">
        <div className="col-span-1 sm:col-span-3">
          <Typography variant="subtitle1">
            {t("hobbiesAndInterests.title")}
          </Typography>
        </div>

        <div className="col-span-1 sm:col-span-9">
          <div className="border-b border-gray-100">
            {HOBBIES_KEYS.map((key) => {
              const title = t(`hobbiesAndInterests.entries.${key}.title`);
              const subtitle = t(`hobbiesAndInterests.entries.${key}.subtitle`);
              const description = t(
                `hobbiesAndInterests.entries.${key}.description`
              );

              return (
                <div key={key} className="border-t border-gray-100 py-4">
                  <div className="space-y-2">
                    <div className="flex flex-row items-center gap-3">
                      <Typography variant="body1" fontWeight="medium">
                        {title}
                      </Typography>

                      <div className="grow border-t border-gray-100 min-w-4" />

                      {subtitle ? (
                        <Chip variant="outlined">{subtitle}</Chip>
                      ) : null}
                    </div>

                    <Typography variant="body2" color="muted">
                      {description}
                    </Typography>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HobbiesAndInterests;
