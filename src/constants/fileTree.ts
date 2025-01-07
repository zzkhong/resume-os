interface FileTree {
  name: string;
  type: "folder" | "file" | "exe" | "github" | "linkedin" | "pdf";
  position: {
    x: number;
    y: number;
  };
}

export const fileTree: Record<string, FileTree> = {
  careers: {
    name: "Career",
    type: "file",
    position: {
      x: 20,
      y: 20,
    },
  },
  portfolios: {
    name: "Portfolio",
    type: "folder",
    position: {
      x: 20,
      y: 100,
    },
  },
  contacts: {
    name: "Contact",
    type: "folder",
    position: {
      x: 20,
      y: 180,
    },
  },
  readme: {
    name: "Read ME",
    type: "file",
    position: {
      x: 20,
      y: 260,
    },
  },
  copyright: {
    name: "Copyright",
    type: "exe",
    position: {
      x: 20,
      y: 340,
    },
  },
};

export const portfolioDir = {};

export const contactDir = {};
