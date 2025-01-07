"use client";

import React from "react";
import { useState } from "react";
import {
  closestCorners,
  DndContext,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import WindowBox from "@/components/window/WindowBox";
import TopBar from "@/components/topbar/Topbar";
import CopyrightFooter from "@/components/footer/Footer";
import DesktopFile from "@/components/file/DesktopFile";
import { fileTree } from "@/constants/fileTree";

const FileExplorerScreen = () => {
  const [isExplorerOpen, setExplorerOpen] = useState(false);
  const [files, setFiles] = useState(fileTree);

  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 10,
    },
  });

  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: {
      distance: 10,
    },
  });

  const sensors = useSensors(mouseSensor, touchSensor);

  const handleClick = (id: string) => {
    console.log("Clicked file with ID:", id);
    if (id === "careers") {
      setExplorerOpen(true);
    }
  };

  const handleDragEnd = (event: any) => {
    const { active, delta } = event;
    const { id } = active;

    if (files[id]) {
      const updatedFiles = { ...files };
      updatedFiles[id] = {
        ...files[id],
        position: {
          x: files[id].position.x + delta.x,
          y: files[id].position.y + delta.y,
        },
      };
      setFiles(updatedFiles);
    }
  };

  return (
    <div className="flex flex-col w-full h-full ">
      <TopBar onReset={() => setFiles(fileTree)} />

      <div className="flex-grow overflow-hidden relative">
        <DndContext
          sensors={sensors}
          onDragEnd={handleDragEnd}
          collisionDetection={closestCorners}
        >
          {Object.keys(files).map((id) => (
            <DesktopFile
              key={id}
              id={id}
              name={files[id].name}
              type={files[id].type}
              onClick={handleClick}
              position={files[id].position}
            />
          ))}
        </DndContext>
      </div>

      {/* File Explorer Window */}
      {isExplorerOpen && (
        <WindowBox title="File Explorer" onClose={() => setExplorerOpen(false)}>
          <div className="flex-grow grid grid-cols-4 gap-4 p-4 text-green-400" />
        </WindowBox>
      )}

      <CopyrightFooter />
    </div>
  );
};

export default FileExplorerScreen;
