import React from "react";

const AboutMe = () => {
  const [activeTab, setActiveTab] = React.useState("about"); // Default to "About Me"

  const sections = [
    {
      id: 1,
      title: "My Background",
      content:
        "I'm from a small town, and I discovered my interest in programming during my high school years. I started by learning HTML and CSS and later advanced to JavaScript, Python, and other programming languages.",
    },
    {
      id: 2,
      title: "Skills & Expertise",
      content:
        "Web Development (HTML, CSS, JavaScript), Backend Development (Node.js, Python), Databases (MySQL, MongoDB), Other Skills (Git, Agile Development).\n\nIf you would like to get in touch, feel free to reach out to me at your.email@example.com.",
    },
  ];

  const experience = [
    {
      company: "GXBank (contract)",
      companyLink: "https://gxbank.my/",
      role: "Senior Web Engineer",
      description:
        "Worked on developing scalable web applications and maintaining backend services.",
    },
    {
      company: "Binance",
      companyLink: "https://www.binance.com/en",
      role: "Web Engineer",
      description:
        "Focused on crafting intuitive user interfaces with React and optimizing performance.",
    },
    {
      company: "Paywatch",
      companyLink: "https://www.paywatch.com.my/",
      role: "Fullstack Engineer",
      description:
        "Focused on crafting intuitive user interfaces with React and optimizing performance.",
    },
    {
      company: "Upstack Studio",
      companyLink: "https://upstackstudio.com/",
      role: "Mobile Engineer",
      description:
        "Focused on crafting intuitive user interfaces with React and optimizing performance.",
    },
    {
      company: "SONY",
      companyLink: "https://www.sony.com.my/electronics/corporate",
      role: "Software Engineer",
      description:
        "Focused on crafting intuitive user interfaces with React and optimizing performance.",
    },
    {
      company: "Werebits",
      role: "Intern",
      description:
        "Focused on crafting intuitive user interfaces with React and optimizing performance.",
    },
  ];

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
      <div className="flex justify-end space-x-5 mb-5">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`text-md font-bold font-silk text-gray-500 ${
              activeTab === tab.id ? "underline text-gray-900" : "no-underline"
            } hover:scale-90 transition-all`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Sections */}
      <div>
        {activeTab === "about"
          ? sections.map((section, index) => (
              <div
                key={section.id}
                className={`flex ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                } items-center mb-10`}
              >
                <h2 className="text-xl font-bold w-1/3 text-center">
                  {section.title}
                </h2>

                <p className="w-2/3 text-gray-700 text-sm font-sans">
                  {section.content.split("\n").map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </p>
              </div>
            ))
          : experience.map((job) => (
              <div
                key={job.company}
                className="mb-5 p-4 border border-gray-200 rounded shadow-md"
              >
                <h3 className="text-gray-600 text-lg font-bold font-silk">
                  {job.role}
                </h3>
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
                <p className="text-gray-700 font-sans">{job.description}</p>
              </div>
            ))}
      </div>
    </div>
  );
};

export default AboutMe;
