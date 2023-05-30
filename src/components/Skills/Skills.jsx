import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";
import { FaNode, FaNpm, FaReact } from "react-icons/fa";
import { AiFillGithub, AiFillHtml5 } from "react-icons/ai";
import { SiCodeigniter, SiCss3, SiTailwindcss } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";

const Skills = () => {
  return (
    <Container id="skills">
      <Slide direction="down">
        <h1>What I Do</h1>
        <h3>FRONTEND DEVELOPER AND WHO WANTS TO EXPLORE EVERY TECH STACK</h3>
      </Slide>
      <Cards>
        <Slide direction="up">
          <Card Icon={AiFillHtml5} title={"HTML"} />
        </Slide>
        <Slide direction="down">
          <Card Icon={SiCss3} title={"CSS"} />
        </Slide>
        <Slide direction="right">
          <Card Icon={FaReact} title={"React JS/Native"} />
        </Slide>
        <Slide direction="left">
          <Card Icon={TbBrandJavascript} title={"JavaScript"} />
        </Slide>
        <Slide direction="up">
          <Card Icon={SiTailwindcss} title={"Tailwindcss"} />
        </Slide>
        <Slide direction="down">
          <Card Icon={AiFillGithub} title={"Git/GitHub"} />
        </Slide>
        <Slide direction="right">
          <Card Icon={FaNode} title={"Node JS"} />
        </Slide>
        <Slide direction="left">
          <Card Icon={SiCodeigniter} title={"PHP (CodeIgniter)"} />
        </Slide>
        <Slide direction="up">
          <Card Icon={FaNpm} title={"NPM"} />
        </Slide>
      </Cards>
      <List>
        <ul>
          <li>
            Develop highly interactive Front end web and mobile applications
          </li>
          <li>Responsive design and cross-browser compatibility</li>
          <li>Create REST API for web application or mobile application.</li>
          <li>
            Skilled in integrating third-party services like Firebase, AWS, and
            Digital Ocean
          </li>
          <li>Experienced in optimizing website performance and load times</li>
          <li>Effective communication and collaboration</li>
        </ul>
      </List>
    </Container>
  );
};

export default Skills;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;
const List = styled.div`
  margin-top: 4rem;
  li {
    padding: 0.3rem;
    color: lightgray;
    font-size: 1.1rem;
  }
`;
