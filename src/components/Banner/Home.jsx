import React from "react";
import styled from "styled-components";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { Slide } from "react-awesome-reveal";
import home from "../../asset/home.png";

const Home = () => {
  return (
    <Container id="home">
      <Slide direction="left">
        <Texts>
          <h4>
            Hello <span className="green">I'am</span>
          </h4>
          <h1 className="green">Yohannes Degu</h1>
          <h3>FRONT END DEVELOPER</h3>

          <p>
            I am Software Developer with two plus years of experience in the
            industry and possesses proficiency in multiple programming languages
            and tools, such as React JS,Next JS, JavaScript, React Native, PHP
            (CodeIgniter), TailwindCSS, Node JS (Express js), and Git/GitHub.
            With his solid experience and strong problem-solving skills, works
            well in teams, and has excellent communication skills. And also
            highly motivated to continue learning and improving his skills.I
            consistently deliver outstanding outcomes in every project
          </p>

          <Social>
            <div className="social-icons">
              <span>
                <a href="https://github.com/Yohannes14" target="_blank" rel="noopener noreferrer">
                  <AiFillGithub size={32} />
                </a>
              </span>
              <span>
                <a href="https://www.linkedin.com/in/yohannes-degu-300b70259/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedinIn size={32} />
                </a>
              </span>
              <span>
                <a href="https://web.telegram.org/k/#@Joh14D" target="_blank" rel="noopener noreferrer">
                  <BsTelegram size={32} />
                </a>
              </span>
              <span>
                <a href="mailto:miladamiri@gmail.com" target="_blank" rel="noopener noreferrer"> 
                  <SiGmail size={32} />
                </a>
              </span>
            </div>
          </Social>
          <button>
            {" "}
            <a href="#contact">Let's talk</a>
          </button>
          <button>
            {" "}
            <a
              href="https://drive.google.com/file/d/13mIzyyTEO7Zrs0cJJtBtnJPd4oZGZ_Vn/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Resume
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
    margin-top: 3rem;
    margin-right: 1rem;
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
