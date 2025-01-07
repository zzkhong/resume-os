"use client";

import React, { JSX } from "react";
import { useState } from "react";
import {
  closestCorners,
  DndContext,
  DragEndEvent,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import WindowBox from "@/components/window/WindowBox";
import TopBar from "@/components/topbar/Topbar";
import CopyrightFooter from "@/components/footer/Footer";
import DesktopFile from "@/components/file/DesktopFile";
import { getAdjustedFileTrees, Window } from "@/constants/fileTree";
import ContentCareer from "@/components/window/ContentCareer";
import ContentContact from "@/components/window/ContentContact";
import ContentReadMe from "@/components/window/ContentReadMe";
import ContentTerminal from "@/components/window/ContentCopyright";
import LoadingDialog from "@/components/dialog/LoadingDialog";

const windowContent: Record<string, JSX.Element> = {
  career: <ContentCareer />,
  contact: <ContentContact />,
  readme: <ContentReadMe />,
  terminal: <ContentTerminal />,
};

const FileExplorerScreen = () => {
  const [windows, setWindows] = useState<Window[]>([]);
  const [focusWindow, setFocusWindow] = useState("");

  const [files, setFiles] = useState(getAdjustedFileTrees());
  const [redirecting, setRedirecting] = useState<string>("");

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
    const file = files[id];

    if (file.type === "github") {
      // Fake Redirecting
      setRedirecting("Opening GitHub...");
      setTimeout(() => {
        window.open("https://github.com/zzkhong", "_blank");
        setRedirecting("");
      }, 1500);
    } else {
      const windowId = `window-${id}`;
      const existingWindow = windows.find((window) => window.id === windowId);

      if (existingWindow) {
        setFocusWindow(windowId);
      } else {
        const newWindow: Window = {
          id: windowId,
          fileId: id,
          title: file.name,
          position: file.position,
        };

        setWindows([...windows, newWindow]);
      }
    }
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, delta } = event;
    const { id } = active;

    // Files position update
    if (files[id] && files[id].position) {
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

    // Windows position update
    if (windows.some((window) => window.id === id)) {
      const updatedWindows = windows.map((window) =>
        window.id === id
          ? {
              ...window,
              position: {
                x: (window.position?.x || 0) + delta.x,
                y: (window.position?.y || 0) + delta.y,
              },
            }
          : window
      );
      setWindows(updatedWindows);
    }
  };

  const handleWindowFocus = (id: string) => {
    setFocusWindow(id);
  };

  const handleReset = () => {
    setFiles(getAdjustedFileTrees());
    setWindows([]);
  };

  return (
    <div className="flex flex-col w-full h-full">
      <TopBar onReset={handleReset} />

      <DndContext
        sensors={sensors}
        onDragEnd={handleDragEnd}
        collisionDetection={closestCorners}
      >
        <div className="flex-grow overflow-hidden relative">
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
        </div>

        <>
          {windows.map((window) => (
            <WindowBox
              key={window.id}
              id={window.id}
              title={window.title}
              className="w-[600px] h-[400px]"
              isFocused={window.id === focusWindow}
              onClick={() => handleWindowFocus(window.id)}
              onClose={() =>
                setWindows(windows.filter((w) => w.id !== window.id))
              }
              position={{
                x: window.position?.x || 0,
                y: window.position?.y || 0,
              }}
            >
              {windowContent[window.fileId]}
            </WindowBox>
          ))}
        </>
      </DndContext>

      <CopyrightFooter />

      <LoadingDialog message={redirecting || ""} isOpen={!!redirecting} />
    </div>
  );
};

export default FileExplorerScreen;
