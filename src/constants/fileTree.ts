interface FileTree {
  name: string;
  type: "folder" | "file" | "exe" | "github" | "linkedin" | "pdf" | "internet";
  position?: {
    x: number;
    y: number;
  };
}

export interface Window {
  id: string;
  fileId: string;
  title: string;
  position?: {
    x: number;
    y: number;
  };
}

const files: Record<string, FileTree> = {
  terminal: {
    name: "Terminal",
    type: "exe",
  },
  resource: {
    name: "Resource",
    type: "folder",
  },
  portfolio: {
    name: "Project",
    type: "github",
  },
  career: {
    name: "About Me",
    type: "internet",
  },
};

export const getAdjustedFileTrees = () => {
  Object.keys(files).every(
    (id, i) =>
      (files[id].position = {
        x: 20,
        y: 20 + i * 80,
      })
  );

  return files;
};
