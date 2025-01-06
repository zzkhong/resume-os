import React, { useState } from "react";

interface DraggableFileProps {
  name: string;
  id: string;
}

const DraggableFile: React.FC<DraggableFileProps> = ({ name, id }) => {
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData("text/plain", id); // Set data for drag
  };

  return (
    <div
      id={id}
      className="flex flex-col items-center p-4 bg-gray-900 rounded-lg shadow-lg hover:bg-green-600 cursor-pointer transition-all"
      draggable
      onDragStart={handleDragStart}
    >
      <span className="mt-2">{name}</span>
    </div>
  );
};

export default DraggableFile;
