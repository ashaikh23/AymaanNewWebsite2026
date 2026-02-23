import { Metadata } from "next";

import { Section } from "@/components/section";
import { Typography } from "@/components/typography";

export const metadata: Metadata = {
  title: "Résumé | Aymaan Shaikh",
};

const ResumePage = () => {
  return (
    <Section id="resume">
      <Typography variant="h1">Résumé</Typography>
      <div className="mt-6 space-y-4">
        <Typography variant="body1">
          My résumé will live here. For now, feel free to reach out via email or
          LinkedIn for the latest copy.
        </Typography>
      </div>
    </Section>
  );
};

export default ResumePage;
