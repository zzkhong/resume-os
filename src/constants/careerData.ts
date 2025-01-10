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
      "Hey, I'm CK from Malaysia. been a Software Engineer since 2018. My interest in programming started back in high school when we learned Visual Basic. I've made a few showcases over the years, and this one is definitely the most customized and personal one yet! Feel free to play around and share any feedback.",
  },
  {
    id: "background",
    title: "MY Background",
    content:
      "Web Development (React, Next, TypeScript), Backend Development (Node, Go, PHP), Mobile Development (React Native) \n\nIf you would like to get in touch, Feel free to reach out to me using the contact info below.",
  },
];

export const experiences: Experience[] = [
  {
    stillWorking: true,
    company: "GXBank (contract)",
    companyLink: "https://gxbank.my/",
    role: "Senior Web Engineer",
    description:
      "Developed and launched Insurance Cyberfraud product. Also maintaining and expanding features on ops support case management portal and customer support CRM",
    caption: "In Progress",
  },
  {
    company: "Binance",
    companyLink: "https://www.binance.com/en",
    role: "Web Engineer",
    description:
      "Development of different region flow for Binance Card Program(Discontinued), as well as feature integration for Binance Merchant Platform",
    caption: "2022-2023",
  },
  {
    company: "Paywatch",
    companyLink: "https://www.paywatch.com.my/",
    role: "Fullstack Engineer",
    description:
      "Developed and launched Paywatch App(Earn Wage Access Service) as the founding team, as well as developing and maintaining the product website for the service",
    caption: "2021-2022",
  },
  {
    company: "Upstack Studio",
    companyLink: "https://upstackstudio.com/",
    role: "Mobile Engineer",
    description:
      "Developed and maintain MY Acson and Daikin GO (Air-con IOT mobile app), expanding user features such as outlet searching, promotional messages and maintainence scheduler",
    caption: "2020-2021",
  },
  {
    company: "SONY",
    companyLink: "https://www.sony.com.my/electronics/corporate",
    role: "Software Engineer",
    description:
      "Worked with team of UX Engineers to develop Home UI, SONY TV Home Interface and support integration for popular application like YouTube, Netflix, Amazon Prime",
    caption: "2018-2020",
  },
  {
    company: "Werebits",
    companyLink: "",
    role: "Intern",
    description:
      "Developed and launched AttendInk, an Attendance Taking App. Was responsible for the Android development of this project",
    caption: "2017",
  },
];
