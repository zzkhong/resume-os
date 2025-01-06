"use client";

import React from "react";
import BootUpScreen from "@/pages/BootUpScreen";
import FileExplorerScreen from "@/pages/FileExplorerScreen";

export default function Home() {
  const [bootComplete, setBootComplete] = React.useState<boolean>(false);
  const [isBootScreenVisible, setIsBootScreenVisible] =
    React.useState<boolean>(false);

  const handleBootComplete = () => {
    setBootComplete(true);
  };

  React.useEffect(() => {
    const handleStorageChange = () => {
      const bootScreenFlag = localStorage.getItem("hasSeenBootScreen");
      if (!bootScreenFlag) {
        setIsBootScreenVisible(true);
      } else {
        setIsBootScreenVisible(false);
      }
    };

    handleStorageChange();
    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <div className="w-full h-screen relative">
      {bootComplete || !isBootScreenVisible ? (
        <FileExplorerScreen />
      ) : (
        <BootUpScreen onComplete={handleBootComplete} />
      )}
    </div>
  );
}
