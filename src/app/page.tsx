"use client";

import React from "react";
import BootUpScreen from "@/pages/BootUpScreen";
import FileExplorerScreen from "@/pages/FileExplorerScreen";
import useWindowSize from "@/hooks/useWindowSize";
import ContentMe from "@/components/window/ContentMe";

export default function Home() {
  const isMobile = useWindowSize();
  const [bootComplete, setBootComplete] = React.useState<boolean>(false);
  const [isBootScreenVisible, setIsBootScreenVisible] =
    React.useState<boolean>(true);

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
    <main className="w-full h-screen relative md:overflow-hidden">
      {bootComplete || !isBootScreenVisible ? (
        isMobile ? (
          <ContentMe />
        ) : (
          <FileExplorerScreen />
        )
      ) : (
        <BootUpScreen onComplete={handleBootComplete} />
      )}
    </main>
  );
}
