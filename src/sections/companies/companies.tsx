"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { Section } from "@/components/section";
import { Typography } from "@/components/typography";

const Companies = () => {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
  const [hoveredCompany, setHoveredCompany] = useState<string | null>(null);

  const BRANDFETCH_CLIENT_ID = "1idytuQ99x6d4ewV5_y";

  const companies = useMemo(
    () => [
      {
        name: "Microsoft",
        logo: `https://cdn.brandfetch.io/microsoft.com/w/400/h/400/type/logo?c=${BRANDFETCH_CLIENT_ID}`,
        alt: "Microsoft logo",
        gradient: "linear-gradient(135deg, #0078D4 0%, #00BCF2 100%)", // Microsoft blue gradient
      },
      {
        name: "MIT",
        logo: `https://cdn.brandfetch.io/mit.edu/w/400/h/400/type/logo?c=${BRANDFETCH_CLIENT_ID}`,
        alt: "MIT logo",
        gradient: "linear-gradient(135deg, #A31F34 0%, #D1212E 100%)", // MIT red gradient
      },
      {
        name: "Fidelity Investments",
        logo: `https://cdn.brandfetch.io/domain/fidelity.com/w/800/h/187/logo?c=${BRANDFETCH_CLIENT_ID}`,
        alt: "Fidelity Investments logo",
        gradient: "linear-gradient(135deg, #01754F 0%, #00A86B 100%)", // Fidelity green gradient
      },
      {
        name: "Verizon",
        logo: `https://cdn.brandfetch.io/verizon.com/w/400/h/400/type/logo?c=${BRANDFETCH_CLIENT_ID}`,
        alt: "Verizon logo",
        gradient: "linear-gradient(135deg, #CD040B 0%, #FF6B6B 100%)", // Verizon red gradient
      },
    ],
    [BRANDFETCH_CLIENT_ID]
  );

  // Update body background gradient when hovering
  useEffect(() => {
    const bodyElement = document.body;
    const mainElement = document.querySelector("main");

    if (hoveredCompany) {
      const company = companies.find((c) => c.name === hoveredCompany);
      if (company) {
        // Apply gradient to body for full page coverage
        bodyElement.style.background = company.gradient;
        bodyElement.style.transition =
          "background 0.4s cubic-bezier(0.4, 0, 0.2, 1)";

        // Also update main element background
        if (mainElement) {
          mainElement.style.background = company.gradient;
          mainElement.style.transition =
            "background 0.4s cubic-bezier(0.4, 0, 0.2, 1)";
        }
      }
    } else {
      bodyElement.style.background = "#0e63ff"; // Default blue-500
      bodyElement.style.transition =
        "background 0.4s cubic-bezier(0.4, 0, 0.2, 1)";

      if (mainElement) {
        mainElement.style.background = "white";
        mainElement.style.transition =
          "background 0.4s cubic-bezier(0.4, 0, 0.2, 1)";
      }
    }
  }, [hoveredCompany, companies]);

  return (
    <Section id="companies" spacing="default">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-16 sm:gap-6">
        <div className="col-span-1 sm:col-span-3">
          <Typography variant="subtitle1">Previous Companies</Typography>
        </div>

        <div className="col-span-1 sm:col-span-9">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 items-center justify-items-center">
            {companies.map((company) => (
              <div
                key={company.name}
                className="flex items-center justify-center w-full h-20 transition-all duration-300 opacity-80 hover:opacity-100 cursor-pointer"
                onMouseEnter={() => setHoveredCompany(company.name)}
                onMouseLeave={() => setHoveredCompany(null)}
              >
                {!imageErrors[company.name] ? (
                  <Image
                    src={company.logo}
                    alt={company.alt}
                    width={160}
                    height={64}
                    className="max-h-16 max-w-full object-contain"
                    onError={() => {
                      setImageErrors((prev) => ({
                        ...prev,
                        [company.name]: true,
                      }));
                    }}
                    unoptimized
                  />
                ) : (
                  <div className="text-gray-400 font-medium text-sm text-center">
                    {company.name}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Companies;
