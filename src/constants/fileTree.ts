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
  title: string;
  position?: {
    x: number;
    y: number;
  };
}

const files: Record<string, FileTree> = {
  career: {
    name: "Career",
    type: "internet",
  },
  portfolio: {
    name: "Project",
    type: "github",
  },
  contact: {
    name: "Contact",
    type: "folder",
  },
  readme: {
    name: "Read ME",
    type: "file",
  },
  copyright: {
    name: "Copyright",
    type: "exe",
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
