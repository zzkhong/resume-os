import React from "react";
import { useState } from "react";
import { DndContext, useDraggable, useDroppable } from "@dnd-kit/core";
import WindowBox from "@/components/window/WindowBox";
import TopBar from "@/components/topbar/Topbar";
import FolderIcon from "@/components/icon/FolderIcon";
import FileIcon from "@/components/icon/FileIcon";

const DesktopIcon = ({
  id,
  name,
  type,
  onDoubleClick,
}: {
  id: string;
  name: string;
  type: "folder" | "file";
  onDoubleClick: (id: string) => void;
}) => {
  const IconComponent = type === "folder" ? FolderIcon : FileIcon;
  return (
    <div
      className="flex flex-col items-center cursor-pointer hover:text-green-300 text-green-400"
      onDoubleClick={() => onDoubleClick(id)}
    >
      <IconComponent title={name} />
    </div>
  );
};

const FileExplorerScreen = () => {
  const [isExplorerOpen, setExplorerOpen] = useState(false);

  const handleDoubleClick = (id: string) => {
    if (id === "explorer") {
      setExplorerOpen(true);
    }
  };

  return (
    <div className="relative w-full h-screen bg-black text-green-400 font-mono">
      <TopBar />

      <div className="grid grid-cols-6 gap-4 p-6">
        <DesktopIcon
          id="explorer"
          name="File Explorer"
          type="folder"
          onDoubleClick={handleDoubleClick}
        />
        <DesktopIcon
          id="resume"
          name="Resume.txt"
          type="file"
          onDoubleClick={() => {}}
        />
      </div>

      {/* File Explorer Window */}
      {isExplorerOpen && (
        <WindowBox title="File Explorer" onClose={() => setExplorerOpen(false)}>
          <div className="flex-grow grid grid-cols-4 gap-4 p-4 text-green-400">
            <DesktopIcon
              id="file1"
              name="Resume.txt"
              type="file"
              onDoubleClick={() => {}}
            />
            <DesktopIcon
              id="folder1"
              name="Projects"
              type="folder"
              onDoubleClick={() => {}}
            />
            <DesktopIcon
              id="file2"
              name="Skills.pdf"
              type="file"
              onDoubleClick={() => {}}
            />
          </div>
        </WindowBox>
      )}
    </div>
  );
};

export default FileExplorerScreen;
