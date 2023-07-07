import React from "react";
import styled from "styled-components";
import { Slide } from "react-awesome-reveal";
import home from "../../asset/home.png";
import { socialLinks } from "../data/data";

const Home = () => {
  return (
    <Container id="home">
      <Slide direction="left">
        <Texts>
          <h4>
            Hello <span>I'am</span>
          </h4>
          <h1 className="green">Yohannes Degu</h1>
          <h3>SOFTWARE DEVELOPER</h3>

          <p>
            I am a Software Developer with over two years of industry
            experience. I have expertise in a range of programming languages and
            tools, including React JS, React Native, Next JS, JavaScript,
            TypeScript, Node JS, Express JS, PHP, CodeIgniter, Tailwind
            CSS/Material UI, Headless UI, Git/GitHub, MySQL, and NoSQL
            databases. I am a strong problem-solver and an effective team player
            with excellent communication skills. I am highly motivated to
            continuously learn and stay updated with the latest technologies and
            industry trends. I consistently deliver outstanding outcomes by
            maintaining high code quality standards and ensuring timely project
            completion.
          </p>

          <Social>
            <div className="social-icons">
              {socialLinks.map((items) => (
                <span>
                  <a
                    href={items.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {items.icon}
                  </a>
                </span>
              ))}
            </div>
          </Social>
          <button>
            {" "}
            <a href="#contact">Let's talk</a>
          </button>
          <button>
            {" "}
            <a
              href="https://drive.google.com/file/d/1TiRv8-lP3ymuKFpFE38RfrY0vePDh2eW/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Download CV
            </a>
          </button>
        </Texts>
      </Slide>
      <Slide direction="right">
        <Profile>
          <img src={home} alt="profile" />
        </Profile>
      </Slide>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  gap: 5rem;
  padding-top: 3rem;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  z-index: 1;
  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;
const Texts = styled.div`
  flex: 1;
  h4 {
    padding: 1rem 0;
    font-weight: 500;
  }
  h1 {
    font-size: 2rem;
    font-family: "Secular One", sans-serif;
    letter-spacing: 2px;
  }
  h3 {
    font-weight: 500;
    font-size: 1.2rem;
    padding-bottom: 1.2rem;
    text-transform: capitalize;
  }
  p {
    font-weight: 300;
    font-size: 1.3rem;
  }

  button {
    padding: 0.7rem 2rem;
    margin: 3rem 1rem 3rem 0;
    cursor: pointer;
    background-color: #01be96;
    border: none;
    color: #fff;
    font-weight: 500;
    filter: drop-shadow(0px 10px 10px #01be9551);
    :hover {
      filter: drop-shadow(0px 10px 10px #01be9570);
    }
    a {
      color: #fff;
      text-decoration: none;
    }
  }
`;
const Social = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  p {
    font-size: 0.9rem;
    @media (max-width: 690px) {
      font-size: 0.7rem;
    }
  }

  .social-icons {
    display: flex;
    align-items: center;
    gap: 2rem;
    span {
      width: 3rem;
      height: 3rem;
      background-color: #000;
      position: relative;
      border-radius: 50px;
      transition: transform 400ms ease-in-out;
      :hover {
        transform: rotate(360deg);
      }
    }

    a {
      color: #fff;
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
const Profile = styled.div`
  img {
    width: 20rem;
    filter: drop-shadow(0px 10px 10px #01be9570);
    transition: transform 400ms ease-in-out;
    @media (max-width: 790px) {
      width: 20rem;
    }

    @media (max-width: 660px) {
      width: 18rem;
    }

    @media (max-width: 640px) {
      width: 100%;
    }
  }

  :hover img {
    transform: translateY(-10px);
  }
`;
