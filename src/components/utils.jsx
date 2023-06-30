import { FaNode, FaNpm, FaReact } from "react-icons/fa";
import { AiFillGithub, AiFillHtml5 } from "react-icons/ai";
import {
  SiCodeigniter,
  SiCss3,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";

export const data = [
  {
    company: "Aaron habesha PLC",
    position: "Frontend Developer",
    date: "Apr 2023 -Jun 2023",
    disc: `Designed and developed the frontend of a Shopping-based ecommerce website.
          Collaborated with backend developers to integrate api. We use React JS with styling TailwindCSS and Material ui.`,
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
    disc: `ecommerce web website used to Sell habesha libs build by React JS, Node JS`,
    link: "https://google.com",
  },
  {
    name: "awakilo",
    disc: `Used to give knowledge about Coffee `,
    link: "https://google.com",
  },
  {
    name: "Real State",
    disc: `Real Estate website used to buy ,sell, rent house `,
    link: "https://www.udemy.com/certificate/UC-e22a4611-a8f6-476e-b19f-a594eef58d54/",
  },
];

const pract =
  "https://www.udemy.com/certificate/UC-830a857a-eeb1-4211-83ad-c60bd02618f4/";

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
