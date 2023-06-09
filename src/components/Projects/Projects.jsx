import styled from "styled-components";
import { Slide } from "react-awesome-reveal";
import { project } from "../data/data";

const Projects = () => {
  return (
    <Container id="projects">
      <Slide direction="down">
        <h1>Projects Delivered</h1>
      </Slide>
      <Project>
        {project.map((item, i) => (
          <div key={i}>
            <div>
              <h1>{item.name}</h1>
            </div>

            <h4>{item.disc}</h4>
            <h5>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                Read More
              </a>
            </h5>
          </div>
        ))}
      </Project>
    </Container>
  );
};

export default Projects;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  position: relative;
  @media (max-width: 840px) {
    width: 90%;
  }
  h4 {
    font-size: 1.1rem;
    color: lightgray;
  }
  h5 {
    font-size: 1rem;
    padding: 1rem;
  }
  a {
    color: #01be96;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;
const Project = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  padding-top: 1rem;
  margin: 0 auto;
  @media (max-width: 840px) {
    width: 90%;
  }
  div {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 2rem 1rem 3rem;
    background-color: #3f3f3f;

    div {
      padding-bottom: 1rem;
      font-size: 0.9rem;
      text-align: center;
    }
  }

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: start;
  }
`;
