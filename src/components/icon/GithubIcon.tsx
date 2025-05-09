import React from "react";
import { FaGithub } from "react-icons/fa";

interface IconProps {
  title?: string;
  color?: string;
  size?: number;
}

const GithubIcon: React.FC<IconProps> = ({ title, color, size }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center w-16 ${
        color || "text-green-400"
      }`}
    >
      <FaGithub className={`w-${size || 10} h-${size || 10}`} />
      <span className="mt-1 text-sm font-mono text-center">{title || ""}</span>
    </div>
  );
};

export default GithubIcon;
