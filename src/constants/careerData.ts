export interface Section {
  id: string;
  image?: string;
  title: string;
  content: string;
}

export interface Experience {
  company: string;
  companyLink: string;
  role: string;
  description: string;
  caption: string;
  stillWorking?: boolean;
}

export const sections: Section[] = [
  {
    id: "profile",
    image: "/image/profile.jpg",
    title: "intro",
    content:
      "I'm from a small town, and I discovered my interest in programming during my high school years. I started by learning HTML and CSS and later advanced to JavaScript, Python, and other programming languages.",
  },
  {
    id: "background",
    title: "MY Background",
    content:
      "Web Development (HTML, CSS, JavaScript), Backend Development (Node.js, Python), Databases (MySQL, MongoDB), Other Skills (Git, Agile Development).\n\nIf you would like to get in touch, feel free to reach out to me at your.email@example.com.",
  },
];

export const experiences: Experience[] = [
  {
    stillWorking: true,
    company: "GXBank (contract)",
    companyLink: "https://gxbank.my/",
    role: "Senior Web Engineer",
    description:
      "Worked on developing scalable web applications and maintaining backend services.",
    caption: "In Progress",
  },
  {
    company: "Binance",
    companyLink: "https://www.binance.com/en",
    role: "Web Engineer",
    description:
      "Focused on crafting intuitive user interfaces with React and optimizing performance.",
    caption: "2022-2023",
  },
  {
    company: "Paywatch",
    companyLink: "https://www.paywatch.com.my/",
    role: "Fullstack Engineer",
    description:
      "Focused on crafting intuitive user interfaces with React and optimizing performance.",
    caption: "2021-2022",
  },
  {
    company: "Upstack Studio",
    companyLink: "https://upstackstudio.com/",
    role: "Mobile Engineer",
    description:
      "Focused on crafting intuitive user interfaces with React and optimizing performance.",
    caption: "2020-2021",
  },
  {
    company: "SONY",
    companyLink: "https://www.sony.com.my/electronics/corporate",
    role: "Software Engineer",
    description:
      "Focused on crafting intuitive user interfaces with React and optimizing performance.",
    caption: "2018-2020",
  },
  {
    company: "Werebits",
    companyLink: "",
    role: "Intern",
    description:
      "Focused on crafting intuitive user interfaces with React and optimizing performance.",
    caption: "2017",
  },
];
