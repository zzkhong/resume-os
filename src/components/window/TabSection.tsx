import React from "react";
import Image from "next/image";
import { Section } from "@/constants/careerData";

interface TabSectionProp {
  section: Section;
  isReversed: boolean;
}

const TabSection: React.FC<TabSectionProp> = ({ section, isReversed }) => (
  <div
    className={`flex ${
      isReversed ? "flex-col sm:flex-row-reverse" : "flex-col sm:flex-row"
    } items-center mb-10`}
  >
    {section.image ? (
      <Image
        width={400}
        height={400}
        src={section.image}
        alt="section image"
        className="w-48 rounded-full mx-4 my-4"
      />
    ) : (
      <h2 className="text-xl font-bold font-silk w-full sm:w-1/3 text-center mb-8 mx-4">
        {section.title}
      </h2>
    )}

    <p className="px-8 md:px-4 md:w-2/3 text-gray-700 text-sm font-mono text-justify leading-relaxed">
      {section.content.split("\n").map((line: string, i) => (
        <React.Fragment key={i}>
          {line}
          <br />
        </React.Fragment>
      ))}
    </p>
  </div>
);

export default TabSection;
