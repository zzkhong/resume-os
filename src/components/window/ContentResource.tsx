"use client";

import React from "react";

interface ContentResourceProp {
  onRedirect: (msg: string, url: string) => void;
}

const ContentResource: React.FC<ContentResourceProp> = () => {
  return (
    <div className="flex-grow grid grid-cols-4 gap-4 p-4 text-green-400">
      {/* Leetcode 75 */}

      {/* System Design */}
    </div>
  );
};

export default ContentResource;
