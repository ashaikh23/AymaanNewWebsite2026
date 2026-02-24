"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";

import { links } from "@/utils/links";

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
      {
        name: "IBM",
        logo: `https://cdn.brandfetch.io/ibm.com/w/400/h/400/type/logo?c=${BRANDFETCH_CLIENT_ID}`,
        alt: "IBM logo",
        gradient: "linear-gradient(135deg, #0F62FE 0%, #4589FF 100%)", // IBM blue gradient
      },
      {
        name: "Dartmouth College",
        logo: `https://cdn.brandfetch.io/dartmouth.edu/w/400/h/400/type/logo?c=${BRANDFETCH_CLIENT_ID}`,
        alt: "Dartmouth College logo",
        gradient: "linear-gradient(135deg, #00693E 0%, #009E5F 100%)", // Dartmouth green gradient
      },
      {
        name: "R42 Group",
        logo: `https://cdn.brandfetch.io/r42group.com/w/400/h/400/type/logo?c=${BRANDFETCH_CLIENT_ID}`,
        alt: "R42 Group logo",
        gradient: "linear-gradient(135deg, #111827 0%, #4B5563 100%)", // Dark neutral gradient
      },
      {
        name: "Cornell University",
        logo: `https://cdn.brandfetch.io/cornell.edu/w/400/h/400?c=${BRANDFETCH_CLIENT_ID}`,
        alt: "Cornell University logo",
        gradient: "linear-gradient(135deg, #B31B1B 0%, #E11D48 100%)", // Cornell red gradient
      },
      {
        name: "University of Massachusetts Amherst",
        logo: `https://cdn.brandfetch.io/umass.edu/w/400/h/400/type/logo?c=${BRANDFETCH_CLIENT_ID}`,
        alt: "University of Massachusetts Amherst logo",
        gradient: "linear-gradient(135deg, #881C1C 0%, #9F1239 100%)", // UMass maroon gradient
      },
      {
        name: "Hack Club",
        logo: `https://cdn.brandfetch.io/hackclub.com/w/400/h/400/type/logo?c=${BRANDFETCH_CLIENT_ID}`,
        alt: "Hack Club logo",
        gradient: "linear-gradient(135deg, #E11D48 0%, #F97316 100%)", // Hack Club warm gradient
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

  const marqueeCompanies = [...companies, ...companies];

  return (
    <Section id="companies" spacing="default">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-16 sm:gap-6">
        <div className="col-span-1 sm:col-span-3">
          <Typography variant="subtitle1">Previous Companies</Typography>
        </div>

        <div className="col-span-1 sm:col-span-9">
          <div className="overflow-hidden">
            <div className="companies-marquee gap-12 items-center">
              {marqueeCompanies.map((company, index) => (
                <div
                  key={`${company.name}-${index}`}
                  className="flex items-center justify-center h-20 cursor-pointer"
                  onMouseEnter={() => setHoveredCompany(company.name)}
                  onMouseLeave={() => setHoveredCompany(null)}
                >
                  {!imageErrors[company.name] ? (
                    company.name === "Cornell University" ? (
                      <Link
                        href={links.cornell}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Cornell University"
                      >
                        <Image
                          src={company.logo}
                          alt={company.alt}
                          width={200}
                          height={80}
                          className="max-h-16 max-w-full object-contain"
                          onError={() => {
                            setImageErrors((prev) => ({
                              ...prev,
                              [company.name]: true,
                            }));
                          }}
                          unoptimized
                        />
                      </Link>
                    ) : (
                      <Image
                        src={company.logo}
                        alt={company.alt}
                        width={200}
                        height={80}
                        className="max-h-16 max-w-full object-contain"
                        onError={() => {
                          setImageErrors((prev) => ({
                            ...prev,
                            [company.name]: true,
                          }));
                        }}
                        unoptimized
                      />
                    )
                  ) : (
                    <div className="text-gray-400 font-medium text-base text-center">
                      {company.name}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Companies;
