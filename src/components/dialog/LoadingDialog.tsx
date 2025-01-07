"use client";

import React from "react";

interface LoadingDialogProps {
  message: string;
  isOpen: boolean;
  onClose?: () => void;
}

const LoadingDialog: React.FC<LoadingDialogProps> = ({
  message,
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
      <div className="p-6 bg-gray-800 text-green-400 rounded shadow-lg relative flex flex-col items-center">
        <div className="loader mb-4" />
        <p className="text-center">{message}</p>
        {onClose && (
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-400 hover:text-white"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
};

export default LoadingDialog;
