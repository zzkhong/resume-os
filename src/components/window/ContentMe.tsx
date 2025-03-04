import React from "react";
import TabSection from "./TabSection";
import TabExperience from "./TabExperience";
import { experiences, sections } from "@/constants/careerData";
import LinkedInIcon from "../icon/LinkedInIcon";
import GithubIcon from "../icon/GithubIcon";
import GmailIcon from "../icon/GmailIcon";
import useWindowSize from "@/hooks/useWindowSize";
import DownloadIcon from "../icon/DownloadIcon";

const ContentMe = () => {
  const isMobile = useWindowSize();
  const [activeTab, setActiveTab] = React.useState("about"); // Default to "About Me"

  const tabs = [
    {
      id: "about",
      label: "About Me",
    },
    {
      id: "experience",
      label: "Career",
    },
  ];

  const bottomLink = [
    {
      id: "linkedin",
      icon: <LinkedInIcon />,
      url: "https://www.linkedin.com/in/zzkhong/",
    },
    {
      id: "github",
      icon: <GithubIcon color="text-gray-700" size={8} />,
      url: "https://github.com/zzkhong",
    },
    {
      id: "gmail",
      icon: <GmailIcon />,
      url: "https://github.com/zzkhong",
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
            className="md:bg-blue-500 text-white py-1 px-3 rounded-lg text-sm 
            font-bold font-silk hover:opacity-80"
          >
            {isMobile ? <DownloadIcon /> : "Download Resume"}
          </a>
        </div>
        <div className="flex justify-end space-x-5">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`text-sm sm:text-base font-bold font-silk text-gray-500 whitespace-nowrap min-w-20 ${
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

      {/* Content */}
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

      <>
        {activeTab === "about" ? (
          <div className="flex items-center justify-center">
            {bottomLink.map((link) => (
              <div
                key={link.id}
                className="w-12 hover:scale-90 hover:opacity-80 transition"
              >
                {link.id === "gmail" ? (
                  <a href="mailto:khongc7@gmail.com">{link.icon}</a>
                ) : (
                  <a target="_blank" href={link.url} rel="noopener noreferrer">
                    {link.icon}
                  </a>
                )}
              </div>
            ))}
          </div>
        ) : (
          <></>
        )}
      </>
    </div>
  );
};

export default ContentMe;
