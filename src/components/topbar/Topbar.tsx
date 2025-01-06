import React from "react";
import dayjs from "dayjs";
import { FiPower } from "react-icons/fi";
import ConfirmDialog from "../dialog/ConfirmDialog";

const TopBar = () => {
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
      <div className="w-full h-10 bg-gray-900 text-green-400 flex items-center justify-between px-4 rounded-t-lg shadow-lg">
        {/* Left Section */}
        <div className="flex items-center space-x-2">
          <button
            onClick={handlePowerClick}
            className="p-2 rounded-full hover:bg-gray-700 transition"
            aria-label="Power Menu"
          >
            <FiPower className="text-green-400 w-5 h-5" />
          </button>
        </div>

        {/* Center Section */}
        <div className="text-center font-mono text-sm">Resume OS v1.0</div>

        {/* Right Section */}
        <div className="text-sm font-mono">{dateTime}</div>
      </div>
    </>
  );
};

export default TopBar;
