import React from "react";

interface ConfirmDialogProp {
  isOpen: boolean;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmDialog: React.FC<ConfirmDialogProp> = ({
  isOpen,
  message,
  onConfirm,
  onCancel,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
      <div className="bg-gray-800 text-green-400 p-4 border border-green-400 shadow-lg w-80 max-w-xs">
        <h2 className="text-sm font-semibold mb-4">{message}</h2>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onCancel}
            className="px-4 py-1.5 text-sm border-2 border-gray-600 text-gray-400 hover:bg-gray-600 hover:text-gray-100 rounded-md transition duration-200 ease-in-out"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-1.5 text-sm border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-gray-100 rounded-md transition duration-200 ease-in-out"
          >
            Restart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDialog;
