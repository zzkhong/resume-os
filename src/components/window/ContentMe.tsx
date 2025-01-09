import React from "react";

const ContentMe: React.FC = () => {
  return (
    <div className="about-me-container w-full mx-auto text-gray-800 bg-gray-200">
      <h1 className="text-center underline text-3xl text-gray-700">About Me</h1>

      {/* Profile Picture */}
      <img
        src="profile-pic.jpg"
        alt="Profile Picture"
        className="block mx-auto rounded-full w-36 h-36 border-4 border-gray-700 mt-5"
      />

      <p className="mt-5">
        Hello, my name is <strong>Your Name</strong>. I am a passionate
        developer with experience in web development and software engineering.
        Below is a little more about my journey.
      </p>

      <h2 className="mt-5 text-xl font-bold">My Background</h2>
      <p>
        I’m from a small town, and I discovered my interest in programming
        during my high school years. I started by learning HTML and CSS and
        later advanced to JavaScript, Python, and other programming languages.
      </p>

      <h2 className="mt-5 text-xl font-bold">Skills & Expertise</h2>
      <ul className="list-disc ml-5">
        <li>
          <span className="font-bold">Web Development:</span> HTML, CSS,
          JavaScript
        </li>
        <li>
          <span className="font-bold">Backend Development:</span> Node.js,
          Python
        </li>
        <li>
          <span className="font-bold">Databases:</span> MySQL, MongoDB
        </li>
        <li>
          <span className="font-bold">Other Skills:</span> Git, Agile
          Development
        </li>
      </ul>

      <h2 className="mt-5 text-xl font-bold">My Interests</h2>
      <p>
        I enjoy solving complex problems and building tools that improve
        people's lives. In my free time, I love reading, exploring new
        technologies, and playing video games.
      </p>

      <h2 className="mt-5 text-xl font-bold">Contact</h2>
      <p>
        If you would like to get in touch, feel free to reach out to me at{" "}
        <strong>your.email@example.com</strong>
      </p>

      {/* Light Audio Player */}
      <div className="mt-5 text-center">
        <audio controls>
          <source src="light-audio.mp3" type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
      </div>

      {/* Resume Download Link */}
      <div className="mt-5 text-center">
        <p>
          Download my resume:{" "}
          <a href="resume.pdf" download className="text-blue-500 underline">
            Click here
          </a>
        </p>
      </div>
    </div>
  );
};

export default ContentMe;
