import styled from "styled-components";
import { Slide } from "react-awesome-reveal";
import { data, project } from "../utils";


const Projects = () => {
  return (
    <Container id="project">
      <Slide direction="down">
        <h1>Work Experiences</h1>
      </Slide>
      <Project>
        {data.map((item, i) => (
          <div key={i}>
            <div>
              <h1>{item.position}</h1>
              <span>
                {item.company} ({item.date})
              </span>
            </div>

            <h4>{item.disc}</h4>
            <h5>{/* <a href={item.link}>Visit Link</a> */}</h5>
          </div>
        ))}
      </Project>
      <Slide direction="down">
        <h1>Portfolio</h1>
      </Slide>
      <Project>
        {project.map((item, i) => (
          <div key={i}>
            <div>
              <h1>{item.name}</h1>
            </div>

            <h4>{item.disc}</h4>
            <h5><a href={item.link}>Visit LInk</a></h5>
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
    font-size:1.1rem;
    color:lightgray;
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
  }
`;
const Project = styled.div`
  display: flex;
  align-items: center;
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
