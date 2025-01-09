"use client";

import React from "react";

const ContentCareer: React.FC = () => {
  const jobs: Job[] = [
    {
      title: "Software Engineer",
      description:
        "Developed web applications and maintained back-end services.",
      image: "/images/job1.jpg",
    },
    {
      title: "Frontend Developer",
      description: "Built interactive user interfaces with React and Next.js.",
      image: "/images/job2.jpg",
    },
    {
      title: "Frontend Developer",
      description: "Built interactive user interfaces with React and Next.js.",
      image: "/images/job2.jpg",
    },
    {
      title: "Frontend Developer",
      description: "Built interactive user interfaces with React and Next.js.",
      image: "/images/job2.jpg",
    },
    {
      title: "Frontend Developer",
      description: "Built interactive user interfaces with React and Next.js.",
      image: "/images/job2.jpg",
    },
    {
      title: "Frontend Developer",
      description: "Built interactive user interfaces with React and Next.js.",
      image: "/images/job2.jpg",
    },
  ];

  return (
    <div className="bg-white p-4 text-gray-900">
      <h2 className="text-3xl font-bold mb-6">Career Experience</h2>
      <div className="space-y-8">
        {jobs.map((job, index) => (
          <div
            key={index}
            className={`flex items-center ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
          >
            <div className="flex-1">
              <h3 className="text-2xl font-semibold">{job.title}</h3>
              <p className="mt-2 text-lg">{job.description}</p>
            </div>
            <div className="flex-1 ml-6">
              <img
                src={job.image}
                alt={job.title}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentCareer;
