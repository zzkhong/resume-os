import React from "react";
import { Experience } from "@/constants/careerData";

interface TabExperienceProp {
  job: Experience;
}

const TabExperience: React.FC<TabExperienceProp> = ({ job }) => (
  <div className="relative mb-5 p-4 border border-gray-200 rounded shadow-md hover:scale-95 transition">
    <div
      className={`relative sm:absolute sm:top-2 sm:right-2 sm:rounded-full text-xs py-1 px-3 font-silk text-white
      ${job.stillWorking ? "bg-blue-500" : "bg-gray-300"}
    `}
    >
      {job.caption}
    </div>

    <h3 className="text-gray-600 text-lg font-bold font-silk">{job.role}</h3>
    <h4 className="text-gray-600 font-silk">
      <a
        href={job.companyLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        {job.company}
      </a>
    </h4>
    <p className="text-gray-700 font-mono">{job.description}</p>
  </div>
);

export default TabExperience;
