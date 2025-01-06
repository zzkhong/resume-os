import React from "react";

interface FolderIconProps {
  width?: number;
  height?: number;
  color?: string;
}

const FolderIcon: React.FC<FolderIconProps> = ({
  width = 64,
  height = 64,
  color = "currentColor",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      width={width}
      height={height}
    >
      <path d="M10 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-6l-2-2H10z" />
    </svg>
  );
};

export default FolderIcon;
