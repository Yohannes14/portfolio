import styled from "styled-components";
import Header from "./components/Banner/Header";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Home from "./components/Banner/Home";
import Education from "./components/Education/Education";
import Experiences from "./components/Experiences/Experiences";
import Certifications from "./components/Certifications/Certifications";
function App() {
  return (
    <Container>
      <Banner>
        <Header />
        <Home />
      </Banner>
      <Education />
      <Skills />
      <LightColor>
        <Experiences />
      </LightColor>
      <Projects />
      <Certifications />
      <LightColor>
        <Contact />
      </LightColor>
    </Container>
  );
}

export default App;

const Container = styled.div``;
const Banner = styled.div`
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
  height: auto;
  @media (max-width: 640px) {
    height: 100%;
    padding-bottom: 2rem;
  }
`;

const LightColor = styled.div`
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
`;
