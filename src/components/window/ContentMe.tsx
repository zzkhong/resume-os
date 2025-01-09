import React from "react";
import TabSection from "./TabSection";
import TabExperience from "./TabExperience";
import { experiences, sections } from "@/constants/careerData";

const ContentMe = () => {
  const [activeTab, setActiveTab] = React.useState("about"); // Default to "About Me"

  const tabs = [
    {
      id: "about",
      label: "About Me",
    },
    {
      id: "experience",
      label: "Experiences",
    },
  ];

  return (
    <div className="about-me-container w-full min-h-full mx-auto p-5 bg-white">
      {/* Tabs */}
      <div className="flex justify-between items-center mb-5">
        <div>
          <a
            href="/file/resume.pdf"
            download
            className="bg-blue-500 text-white py-1 px-3 rounded-lg text-sm font-bold font-silk hover:opacity-80"
          >
            Download Resume
          </a>
        </div>
        <div className="flex justify-end space-x-5">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`text-md font-bold font-silk text-gray-500 ${
                activeTab === tab.id
                  ? "underline text-gray-900"
                  : "no-underline"
              } hover:scale-90 transition-all`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Sections */}
      <div className="mt-4">
        {activeTab === "about"
          ? sections.map((section, index) => (
              <TabSection
                key={section.id}
                section={section}
                isReversed={index % 2 === 0}
              />
            ))
          : experiences.map((job, index) => (
              <TabExperience key={index} job={job} />
            ))}
      </div>
    </div>
  );
};

export default ContentMe;
