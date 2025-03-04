import { useState, useEffect } from "react";

const useWindowSize = () => {
  const [isMobile, setIsMobile] = useState(false);
  const searchParams = new URLSearchParams(window.location.search);
  const forceDesktop = searchParams.get("desktop") === "true";

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768 && !forceDesktop);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [forceDesktop]);

  return isMobile;
};

export default useWindowSize;
