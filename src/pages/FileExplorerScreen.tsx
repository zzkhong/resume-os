import { useState } from "react";
import FileIcon from "@/components/icons/FileIcon";
import FolderIcon from "@/components/icons/FolderIcon";

const FileExplorerScreen = () => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="text-green-500 font-mono w-full h-full p-8 bg-black">
      <div className="text-lg mb-4">
        Welcome to your Resume OS. Here are your directories:
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Folder 1 */}
        <div
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => setSelected("Folder 1")}
        >
          <FolderIcon />
          <div>Folder 1</div>
        </div>

        {/* Folder 2 */}
        <div
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => setSelected("Folder 2")}
        >
          <FolderIcon />
          <div>Folder 2</div>
        </div>

        {/* File 1 */}
        <div
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => setSelected("File 1")}
        >
          <FileIcon />
          <div>File 1.txt</div>
        </div>

        {/* File 2 */}
        <div
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => setSelected("File 2")}
        >
          <FileIcon />
          <div>File 2.pdf</div>
        </div>
      </div>

      {/* Display selected file/folder */}
      {selected && (
        <div className="mt-6 text-xl">
          You selected: <span className="text-yellow-500">{selected}</span>
        </div>
      )}
    </div>
  );
};

export default FileExplorerScreen;
