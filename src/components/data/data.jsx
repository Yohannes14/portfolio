import { FaLinkedinIn, FaNode, FaNpm, FaReact } from "react-icons/fa";
import { AiFillGithub, AiFillHtml5 } from "react-icons/ai";
import {
  SiCodeigniter,
  SiCss3,
  SiGmail,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { BsTelegram } from "react-icons/bs";

import front from "../../asset/front.png";
import git from "../../asset/git.png";
import html from "../../asset/html.png";
import cyber from "../../asset/cyber.png";

export const experince = [
  {
    company: "Aaron habesha PLC",
    position: "Full Stack Developer",
    date: "Apr 2023 -Jun 2023",
    disc: `Designed and developed web based ecommerce website using React JS ,Node JS and MYSQL with styling TailwindCSS and Material ui.`,
    link: "https://google.com",
  },
  {
    company: "Crossroads Tech solution PLC",
    position: "Frontend Developer",
    date: "Dec 2021 -Present",
    disc: `worked as design and develop frontend app for web and mobile and collaborated with  with backend developer to integrate REST Api. Used React JS and React native And Also We use clean and resuable code`,
    link: "https://google.com",
  },
];
export const project = [
  {
    name: "aaron habesh",
    disc: `Web based ecommerce website used to Sell habesha libs build by React JS, Node JS...`,
    link: "https://aaronhabesh.com/",
  },
  {
    name: "awakilo",
    disc: `Web based website Used to extention service for coffee farmers...`,
    link: "https://awakilo.com/",
  },
  {
    name: "awakilo",
    disc: `Mobile app Used to extention service for coffee farmers...`,
    link: "https://awakilo.com/",
  },
];

export const skill = [
  {
    direction: "up",
    Icon: AiFillHtml5,
    title: "HTML",
  },
  {
    direction: "up",
    Icon: SiCss3,
    title: "CSS",
  },
  {
    direction: "right",
    Icon: FaReact,
    title: "React JS/Native",
  },
  {
    direction: "right",
    Icon: FaReact,
    title: "Next JS",
  },

  { direction: "right", Icon: SiRedux, title: "Redux" },
  { direction: "left", Icon: TbBrandJavascript, title: "JavaScript" },

  { direction: "left", Icon: SiTypescript, title: "TypeScript" },
  { direction: "down", Icon: AiFillGithub, title: "Git/GitHub" },
  { direction: "right", Icon: FaNode, title: "Node JS" },
  { direction: "right", Icon: FaNode, title: "Express JS" },
  {
    direction: "left",
    Icon: SiCodeigniter,
    title: "PHP (CodeIgniter)",
  },
  { direction: "up", Icon: SiTailwindcss, title: "Tailwindcss" },
  { direction: "up", Icon: SiTailwindcss, title: "Material UI" },
  {
    direction: "up",
    Icon: SiTailwindcss,
    title: "Headless UI",
  },
  {
    direction: "down",
    Icon: FaNpm,
    title: "NPM",
  },
];

export const socialLinks = [
  {
    link: "https://github.com/Yohannes14",
    icon: <AiFillGithub size={32} />,
  },
  {
    link: "https://www.linkedin.com/in/yohannes-degu-300b70259/",
    icon: <FaLinkedinIn size={32} />,
  },
  {
    link: "https://web.telegram.org/k/#@Joh14D",
    icon: <BsTelegram size={32} />,
  },
  {
    link: "mailto:yohansdegu.2010@gmail.com",
    icon: <SiGmail size={32} />,
  },
];

export const headerLink = [
  { name: "Home", link: "#home" },
  { name: "Education", link: "#education" },
  { name: "Skills", link: "#skills" },
  { name: "Work Experiences", link: "#experiences" },
  { name: "Projects", link: "#project" },
  { name: "Certifications", link: "#certifications" },
  { name: "Contact Me", link: "#contact" },
];

export const certificationData = [
  {
    name: "Introduction to Front-End Development",
    img_url: front,
    link: "https://coursera.org/share/b79ba831134bbef23c36768ca071b9d4",
    disc: `Distinguish between front-end, back-end, and full-stack developers, create and style a webpage with HTML,The benefits of working with UI frameworks.`,
  },
  {
    name: "Version Control",
    img_url: git,
    link: "https://coursera.org/share/b0af50e26f744432bcf866027660735d",
    disc: `Implement version control systems, use a gitHub repository create a github repository,Navigate and configure using the command line, Manage code revisions`,
  },
  {
    name: "Introduction to Cybersecurity",
    img_url: cyber,
    link: "https://drive.google.com/file/d/1LA8epyjkWHinliqwddQ3RcvEYAp_ctE1/view?usp=drive_link",
    disc: `Global implications of cyber threats,ways in which networks are vulnerable to attack, impact of cyber-attacks on industies`,
  },
  {
    name: "HTML5",
    img_url: html,
    link: "https://www.udemy.com/certificate/UC-e22a4611-a8f6-476e-b19f-a594eef58d54/",
    disc: `how to design quality websites using HTML and CSS,fundamentals of coding in CSS and how to style websites beautifully,create customizable forms in HTML5`,
  },
  {
    name: "CSS3 FlexBox Media Queries &CSS Grid",
    img_url: git,
    link: "https://www.udemy.com/certificate/UC-830a857a-eeb1-4211-83ad-c60bd02618f4/",
    disc: `Responsive web design and development, concepts of media queries and how to use them, CSS grid and how to use if=t for responsive web design`,
  },
];
