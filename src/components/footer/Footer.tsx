import React from "react";

const CopyrightFooter: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-black bg-opacity-50 py-2">
      <p className="text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} CK Chin. All Rights Reserved.
      </p>
    </div>
  );
};

export default CopyrightFooter;
