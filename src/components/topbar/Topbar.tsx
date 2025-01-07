import React from "react";
import dayjs from "dayjs";
import { GrPowerReset } from "react-icons/gr";
import { FiPower } from "react-icons/fi";
import ConfirmDialog from "../dialog/ConfirmDialog";

interface TopBarProp {
  onReset: () => void;
}

const TopBar: React.FC<TopBarProp> = ({ onReset }) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [dateTime, setDateTime] = React.useState(
    dayjs().format("DD-MMM-YY HH:mm")
  );

  React.useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(dayjs().format("DD-MMM-YY HH:mm"));
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const handlePowerClick = () => {
    setIsModalOpen(true); // Open modal on power button click
  };

  const handleRestart = () => {
    setIsModalOpen(false);
    localStorage.removeItem("hasSeenBootScreen");
    window.location.reload();
  };

  return (
    <>
      <ConfirmDialog
        isOpen={isModalOpen}
        message="Are you sure you want to restart the PC?"
        onConfirm={handleRestart}
        onCancel={() => setIsModalOpen(false)}
      />
      <div className="w-full z-10 h-10 bg-gray-900 text-green-400 flex items-center justify-between px-4 shadow-lg">
        {/* Left Section */}
        <div className="flex items-center space-x-2">
          <button
            onClick={handlePowerClick}
            className="p-1 rounded-full hover:bg-gray-700 active:opacity-50 transition"
            aria-label="Power Menu"
          >
            <FiPower className="text-green-400 w-5 h-5" />
          </button>
          <button
            onClick={onReset}
            className="p-1 rounded-full hover:bg-gray-700 active:opacity-50 transition"
            aria-label="Reset"
          >
            <GrPowerReset className="text-green-400 w-5 h-5" />
          </button>
        </div>

        {/* Center Section */}
        <div className="text-center font-mono text-sm">Resume v6.1</div>

        {/* Right Section */}
        <div className="text-sm font-mono">{dateTime}</div>
      </div>
    </>
  );
};

export default TopBar;
