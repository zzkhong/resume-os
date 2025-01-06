import React from "react";
import { FiFolder } from "react-icons/fi"; // Import folder icon

interface IconProps {
  title: string;
}

const FolderIcon: React.FC<IconProps> = ({ title }) => {
  return (
    <div className="flex flex-col items-center justify-center text-green-400">
      <FiFolder className="w-10 h-10" />
      <span className="mt-1 text-sm font-mono text-center">{title}</span>
    </div>
  );
};

export default FolderIcon;
