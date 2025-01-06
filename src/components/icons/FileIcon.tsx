import React from "react";

interface FileIconProps {
  width?: number;
  height?: number;
  color?: string;
}

const FileIcon: React.FC<FileIconProps> = ({
  width = 56,
  height = 56,
  color = "currentColor",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.5"
      width={width}
      height={height}
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
      <line x1="8" y1="10" x2="16" y2="10" strokeLinecap="round" />
      <line x1="8" y1="14" x2="16" y2="14" strokeLinecap="round" />
      <line x1="8" y1="18" x2="16" y2="18" strokeLinecap="round" />
    </svg>
  );
};

export default FileIcon;
