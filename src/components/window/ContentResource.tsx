"use client";

import React from "react";
import DesktopFile from "../file/DesktopFile";

interface ContentResourceProp {
  onRedirect: (msg: string, url: string) => void;
}

const ContentResource: React.FC<ContentResourceProp> = ({ onRedirect }) => {
  const files = [
    {
      id: "leetcode",
      name: "Leetcode Blind 75",
      type: "internet",
      link: "https://zzkhong.notion.site/LeetCode-77-6dbfacb05b294cb19843e9c71c816811?pvs=74",
      message: "Opening LeetCode Blind 75",
    },
    {
      id: "systemdesign",
      name: "Awesome System Design",
      type: "internet",
      link: "https://github.com/ashishps1/awesome-system-design-resources",
      message: "Opening Awesome System Design",
    },
    {
      id: "books",
      name: "Books Catalogue",
      type: "internet",
      link: "https://github.com/rishabhmodi03/BOOKS",
      message: "Opening Books Catalogue",
    },
  ];

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
