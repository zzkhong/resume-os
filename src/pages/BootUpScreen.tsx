import useTypingEffect from "@/hooks/useTypingEffect";
import React from "react";

interface BootUpScreenProps {
  onComplete: () => void;
}

const messages = [
  {
    msg: "Loading core files...",
    percent: 27,
    time: 600,
  },
  {
    msg: "Verifying system integrity...",
    percent: 47,
    time: 1200,
  },
  {
    msg: "Booting CK Chin Resume...",
    percent: 69,
    time: 1800,
  },
  {
    msg: "System online...Access Granted",
    percent: 100,
    time: 2400,
  },
];

const BootUpScreen: React.FC<BootUpScreenProps> = ({ onComplete }) => {
  const [loadingText, setLoadingText] =
    React.useState<string>("Initializing...");
  const [progress, setProgress] = React.useState<number>(0);
  const [isFinished, setIsFinished] = React.useState<boolean>(false);

  const typedText = useTypingEffect(loadingText);

  const delay = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  React.useEffect(() => {
    if (isFinished) {
      setLoadingText("Welcome! Press any key to start browsing!");
    } else {
      (async () => {
        for (let i = 0; i < messages.length; i++) {
          const { msg, percent, time } = messages[i];

          setLoadingText(msg);
          setProgress(percent);
          await delay(time);

          if (i === messages.length - 1) {
            localStorage.setItem("hasSeenBootScreen", "true");
            setIsFinished(true);
          }
        }
      })();
    }
  }, [isFinished]);

  React.useEffect(() => {
    if (isFinished) {
      window.addEventListener("keydown", onComplete);
      window.addEventListener("click", onComplete);
    }

    return () => {
      window.removeEventListener("keydown", onComplete);
      window.removeEventListener("click", onComplete);
    };
  }, [onComplete, isFinished]);

  return (
    <div className="w-full h-full bg-black text-green-500 flex justify-center items-center flex-col">
      <div>
        <h1 className="text-lg text-center">{typedText}</h1>

        {!isFinished && (
          <div className="w-80 h-1 mt-4 bg-gray-700">
            <div
              style={{ width: `${progress}%` }}
              className="animate-pulse h-full bg-green-500 transition-width duration-1000"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default BootUpScreen;
