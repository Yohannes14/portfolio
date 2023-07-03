import styled from "styled-components";
import { Slide } from "react-awesome-reveal";
import { experince } from "../data/data";

const Experiences = () => {
  return (
    <Container id="experinces">
      <Slide direction="down">
        <h1>Work Experiences</h1>
      </Slide>
      <Experience>
        {experince.map((item, i) => (
          <div key={i}>
            <div>
              <h1>{item.position}</h1>
              <span>
                {item.company} ({item.date})
              </span>
            </div>

            <h4>{item.disc}</h4>
          </div>
        ))}
      </Experience>
    </Container>
  );
};

export default Experiences;

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
`;
const Experience = styled.div`
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
