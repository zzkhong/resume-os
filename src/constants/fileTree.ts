interface FileTree {
  name: string;
  type:
    | "folder"
    | "file"
    | "exe"
    | "game"
    | "github"
    | "linkedin"
    | "pdf"
    | "internet";
  position?: {
    x: number;
    y: number;
  };
  link?: {
    message: string;
    url: string;
  };
}

export interface Window {
  id: string;
  fileId: string;
  title: string;
  style?: React.CSSProperties;
  className?: string;
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
  snake: {
    name: "Snake",
    type: "game",
  },
  resource: {
    name: "Resource",
    type: "folder",
  },
  portfolio: {
    name: "Project",
    type: "github",
    link: {
      message: "Opening GitHub...",
      url: "https://github.com/zzkhong",
    },
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
