import React from "react";
import { BiLogoGmail } from "react-icons/bi";

interface IconProps {
  title?: string;
  color?: string;
  size?: number;
}

const GmailIcon: React.FC<IconProps> = ({ title, color, size }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center w-16 ${
        color || "text-red-700"
      }`}
    >
      <BiLogoGmail className={`w-${size || 8} h-${size || 8}`} />
      <span className="mt-1 text-sm font-mono text-center">{title || ""}</span>
    </div>
  );
};

export default GmailIcon;
