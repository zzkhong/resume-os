"use client";

import React from "react";
import DesktopFile from "../file/DesktopFile";
import files from "@/constants/fileData";

interface ContentResourceProp {
  onRedirect: (msg: string, url: string) => void;
}

const ContentResource: React.FC<ContentResourceProp> = ({ onRedirect }) => {
  return (
    <div className="flex flex-row py-4 text-green-400">
      {files.map((file) => (
        <div key={file.id} className="px-4">
          <DesktopFile
            id={file.id}
            name={file.name}
            type={file.type}
            onClick={() => onRedirect(file.message, file.link)}
          />
        </div>
      ))}
    </div>
  );
};

export default ContentResource;
