"use client";

import React from "react";
import BootUpScreen from "@/pages/BootUpScreen";
import FileExplorerScreen from "@/pages/FileExplorerScreen";

export default function Home() {
  const [bootComplete, setBootComplete] = React.useState<boolean>(false);

  const handleBootComplete = () => {
    setBootComplete(true);
  };

  return (
    <div className="w-full h-screen relative">
      {bootComplete ? (
        <FileExplorerScreen />
      ) : (
        <BootUpScreen onComplete={handleBootComplete} />
      )}
    </div>
  );
}
