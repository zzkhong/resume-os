import React from "react";
import { useDraggable } from "@dnd-kit/core";
import { iconMapper } from "@/constants/iconMapper";

interface DesktopFileProp {
  id: string;
  name: string;
  type: string;
  onClick?: (id: string) => void;
  position?: { x: number; y: number };
}

const DesktopFile: React.FC<DesktopFileProp> = ({
  id,
  name,
  type,
  onClick,
  position,
}) => {
  const IconComponent = iconMapper[type];
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({ id, disabled: !position });

  const style = position
    ? {
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
      }
    : {};

  return (
    <div
      ref={setNodeRef}
      className="flex flex-col z-10 items-center active:opacity-50 hover:scale-90 text-green-400"
      onClick={() => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        if (!isDragging) onClick && onClick(id);
      }}
      style={
        position
          ? {
              position: "absolute",
              ...style,
            }
          : {
              position: "relative",
            }
      }
      {...listeners}
      {...attributes}
    >
      <IconComponent title={name} />
    </div>
  );
};

export default DesktopFile;
