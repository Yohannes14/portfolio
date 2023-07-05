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
import aau from "../../asset/aau.png";
import aau1 from "../../asset/aau1.png";
import aau2 from "../../asset/aau2.png";
import css from "../../asset/css.png";
import js from "../../asset/js.png";
import react from "../../asset/react.png";

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
  { name: "Work Experiences", link: "#experinces" },
  { name: "Projects", link: "#projects" },
  { name: "Certifications", link: "#certifications" },
  { name: "Contact Me", link: "#contact" },
];

export const certificationData = [
  {
    name: "Introduction to Front-End Development",
    img_url: front,
    link: "https://drive.google.com/file/d/1opCUFsvrOn87LrA03IoEf8T0lMs9xf3t/view?usp=sharing",
    disc: `Distinguish between front-end, back-end, and full-stack developers, create and style a webpage with HTML,The benefits of working with UI frameworks.`,
  },
  {
    name: "Programming with JavaScript",
    img_url: js,
    link: "https://drive.google.com/file/d/1uxvzu9NoUL6dLkQ708GpmXZeYzIDI9sV/view?usp=sharing",
    disc: `Explain the importance of JavaScript in software development such as how to write JavaScript code inside the browser, how to write basic JavaScript code: List common operators, conditional statements and loops, use variables and output their values in the console`,
  },
  {
    name: "React Basics",
    img_url: react,
    link: "https://drive.google.com/file/d/1OX6pGYZhxtvEcZYwM2jxi-0yBsKCmrKP/view?usp=sharing",
    disc: `Explain the concepts behind React and component architecture,Create a component to serve a specific purpose,Use and manipulate props and components to effect visual results. how to use assets within an app to apply styling and functional components`,
  },
  {
    name: "Version Control",
    img_url: git,
    link: "https://drive.google.com/file/d/1OX6pGYZhxtvEcZYwM2jxi-0yBsKCmrKP/view?usp=sharing",
    disc: `Implement version control systems, use a gitHub repository create a github repository,Navigate and configure using the command line, Manage code revisions`,
  },
  {
    name: "HTML5",
    img_url: html,
    link: "https://www.udemy.com/certificate/UC-e22a4611-a8f6-476e-b19f-a594eef58d54/",
    disc: `how to design quality websites using HTML and CSS,fundamentals of coding in CSS and how to style websites beautifully,create customizable forms in HTML5`,
  },
  {
    name: "CSS3 FlexBox Media Queries &CSS Grid",
    img_url: css,
    link: "https://www.udemy.com/certificate/UC-830a857a-eeb1-4211-83ad-c60bd02618f4/",
    disc: `Responsive web design and development, concepts of media queries and how to use them, CSS grid and how to use if=t for responsive web design`,
  },
  {
    name: "Workshop on the area of Android development with JAva",
    img_url: aau2,
    link: "https://drive.google.com/file/d/1kPhyVbX1z5e3yTfxB0kpdQDyUlUQAFzK/view?usp=sharing",
    disc: `Three day training workshop on the area of android application development with JAVA.`,
  },
  {
    name: "Introduction to Cybersecurity",
    img_url: cyber,
    link: "https://drive.google.com/file/d/1LA8epyjkWHinliqwddQ3RcvEYAp_ctE1/view?usp=drive_link",
    disc: `Global implications of cyber threats,ways in which networks are vulnerable to attack, impact of cyber-attacks on industies`,
  },
  {
    name: "NUmber slider puzzle",
    img_url: aau1,
    link: "https://drive.google.com/file/d/1kPhyVbX1z5e3yTfxB0kpdQDyUlUQAFzK/view?usp=sharing",
    disc: `Design Number slider puzzle game using  C++`,
  },
  {
    name: "Workshop on the area of Frontend and Backend system development",
    img_url: aau,
    link: "https://drive.google.com/file/d/1kPhyVbX1z5e3yTfxB0kpdQDyUlUQAFzK/view?usp=sharing",
    disc: `Three day trainig workshop on the area of Front end and Backend development, IT entrepreneurship and bussiness skills`,
  },
];
