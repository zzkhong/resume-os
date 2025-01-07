"use client";

import React from "react";
import { useDroppable } from "@dnd-kit/core";

interface WindowBoxProps {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}

const WindowBox = ({ title, onClose, children }: WindowBoxProps) => {
  const { setNodeRef } = useDroppable({ id: "explorer-window" });

  return (
    <div
      ref={setNodeRef}
      className="absolute z-20 top-20 left-20 w-[600px] h-[400px] bg-gray-900 border border-green-400 shadow-lg flex flex-col"
    >
      <div className="flex justify-between items-center bg-gray-800 px-4 py-2 border-b border-green-400">
        <span className="text-green-400">{title}</span>
        <button onClick={onClose} className="text-green-400 hover:opacity-50">
          ✕
        </button>
      </div>
      <div className="flex-grow overflow-auto p-4">{children}</div>
    </div>
  );
};

export default WindowBox;
