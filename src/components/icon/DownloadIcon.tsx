import React from "react";
import { IoMdDownload } from "react-icons/io";

interface IconProps {
  title?: string;
}

const DownloadIcon: React.FC<IconProps> = ({ title }) => {
  return (
    <div className="flex flex-col items-center justify-center w-16 text-gray-600">
      <IoMdDownload className="w-8 h-8" />
      <span className="mt-1 text-sm font-mono text-center">{title || ""}</span>
    </div>
  );
};

export default DownloadIcon;
