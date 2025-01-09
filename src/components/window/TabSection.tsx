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
      isReversed ? "flex-row-reverse" : "flex-row"
    } items-center mb-10`}
  >
    {section.image ? (
      <Image
        width={400}
        height={400}
        src={section.image}
        alt="section image"
        className="w-48 rounded-full mx-4"
      />
    ) : (
      <h2 className="text-xl font-bold font-silk w-1/3 text-center mb-8 mx-4">
        {section.title}
      </h2>
    )}

    <p className="w-2/3 text-gray-700 text-sm font-mono">
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
