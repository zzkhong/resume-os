import React from "react";
import { FaInternetExplorer } from "react-icons/fa";

interface IconProps {
  title?: string;
}

const InternetIcon: React.FC<IconProps> = ({ title }) => {
  return (
    <div className="flex flex-col items-center justify-center w-16 text-green-400">
      <FaInternetExplorer className="w-10 h-10" />
      <span className="mt-1 text-sm font-mono text-center leading-4">
        {title}
      </span>
    </div>
  );
};

export default InternetIcon;
