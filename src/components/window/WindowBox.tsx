"use client";

import React from "react";
import { useDraggable } from "@dnd-kit/core";

interface WindowBoxProps {
  id: string;
  title: string;
  onClose: () => void;
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  position: { x: number; y: number };
  isFocused: boolean;
}

const WindowBox = ({
  id,
  title,
  onClose,
  onClick,
  children,
  className,
  position,
  style,
  isFocused,
}: WindowBoxProps) => {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({ id });

  const draggableStyle = {
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
  };

  return (
    <div
      onClick={onClick}
      className={`absolute ${
        isFocused || isDragging ? "z-30" : "z-20"
      } bg-gray-900 border border-green-400 shadow-lg flex flex-col ${className}`}
      style={{
        position: "absolute",
        ...style,
        ...draggableStyle,
      }}
    >
      <div
        ref={setNodeRef}
        className="flex justify-between items-center bg-gray-800 px-4 py-2 border-b border-green-400"
        style={{
          cursor: "inherit",
        }}
        {...listeners}
        {...attributes}
      >
        <span className="text-green-400">{title}</span>
        <button onClick={onClose} className="text-green-400 hover:opacity-50">
          ✕
        </button>
      </div>

      <div className="flex-grow overflow-auto">{children}</div>
    </div>
  );
};

export default WindowBox;
