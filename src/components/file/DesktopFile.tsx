import React from "react";
import FolderIcon from "../icon/FolderIcon";
import FileIcon from "../icon/FileIcon";
import { useDraggable } from "@dnd-kit/core";
import TerminalIcon from "../icon/TerminalIcon";
import LinkedInIcon from "../icon/LinkedInIcon";
import GithubIcon from "../icon/GithubIcon";
import PDFIcon from "../icon/PDFIcon";

interface DesktopFileProp {
  id: string;
  name: string;
  type: string;
  onClick?: (id: string) => void;
  position: { x: number; y: number };
}

const iconMapper: any = {
  folder: FolderIcon,
  file: FileIcon,
  exe: TerminalIcon,
  linkedin: LinkedInIcon,
  github: GithubIcon,
  pdf: PDFIcon,
};

const DesktopFile: React.FC<DesktopFileProp> = ({
  id,
  name,
  type,
  onClick,
  position,
}) => {
  const IconComponent = iconMapper[type];
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({ id });

  const style = {
    ...(transform
      ? {
          transform: `translate3d(${position.x + transform.x}px, ${
            position.y + transform.y
          }px, 0)`,
        }
      : {
          left: `${position.x}px`,
          top: `${position.y}px`,
        }),
    cursor: isDragging ? "move" : "pointer",
  };

  return (
    <div
      ref={setNodeRef}
      className="flex flex-col z-10 items-center 
      active:opacity-50 hover:scale-90 text-green-400"
      onClick={() => {
        if (!isDragging) onClick && onClick(id);
      }}
      style={{
        position: "absolute",
        ...style,
      }}
      {...listeners}
      {...attributes}
    >
      <IconComponent title={name} />
    </div>
  );
};

export default DesktopFile;
