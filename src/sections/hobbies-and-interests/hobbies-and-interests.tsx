"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import { Chip } from "@/components/chip";
import { Section } from "@/components/section";
import { Typography } from "@/components/typography";

const HOBBIES_KEYS = ["1", "2"] as const;

const CARD_ACCENTS = {
  "1": "border-l-blue-500 bg-blue-50/30 hover:bg-blue-50/50",
  "2": "border-l-emerald-500 bg-emerald-50/30 hover:bg-emerald-50/50",
} as const;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
};

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

        <motion.div
          className="col-span-1 sm:col-span-9 space-y-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
        >
          {HOBBIES_KEYS.map((key) => {
            const title = t(`hobbiesAndInterests.entries.${key}.title`);
            const subtitle = t(`hobbiesAndInterests.entries.${key}.subtitle`);
            const description = t(
              `hobbiesAndInterests.entries.${key}.description`
            );

            return (
              <motion.article
                key={key}
                variants={item}
                className={`
                  relative overflow-hidden rounded-xl border border-gray-100
                  border-l-4 pl-5 pr-5 py-4
                  transition-colors duration-200
                  ${CARD_ACCENTS[key]}
                `}
              >
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      className="text-gray-900"
                    >
                      {title}
                    </Typography>
                    {subtitle ? (
                      <Chip variant="outlined">{subtitle}</Chip>
                    ) : null}
                  </div>
                  <Typography
                    variant="body2"
                    color="muted"
                    className="leading-relaxed"
                  >
                    {description}
                  </Typography>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </Section>
  );
};

export default HobbiesAndInterests;
