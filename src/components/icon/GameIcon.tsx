import React from "react";
import { IoLogoGameControllerB } from "react-icons/io";

interface IconProps {
  title: string;
}

const GameIcon: React.FC<IconProps> = ({ title }) => {
  return (
    <div className="flex flex-col items-center justify-center w-16 text-green-400">
      <IoLogoGameControllerB className="w-10 h-10" />
      <span className="mt-1 text-sm font-mono text-center">{title}</span>
    </div>
  );
};

export default GameIcon;
