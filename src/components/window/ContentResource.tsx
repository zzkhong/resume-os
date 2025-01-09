"use client";

import React from "react";

interface ContentResourceProp {
  onRedirect: (msg: string, url: string) => void;
}

const ContentResource: React.FC<ContentResourceProp> = ({ onRedirect }) => {
  return (
    <div className="flex-grow grid grid-cols-4 gap-4 p-4 text-green-400">
      Contact
    </div>
  );
};

export default ContentResource;
