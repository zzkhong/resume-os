"use client";

import React from "react";
import BootUpScreen from "@/components/BootUpScreen";

export default function Home() {
  const [bootComplete, setBootComplete] = React.useState<boolean>(false);

  const handleBootComplete = () => {
    setBootComplete(true);
  };

  return (
    <div className="w-full h-screen relative">
      <BootUpScreen onComplete={handleBootComplete} />
    </div>
  );
}
