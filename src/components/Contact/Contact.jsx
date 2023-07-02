import React from "react";
import styled from "styled-components";
import { HiOutlineMailOpen } from "react-icons/hi";
import { AiOutlineArrowUp } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { Slide, Zoom, Fade } from "react-awesome-reveal";
import home from "../../asset/home1.jpg";
import { socialLinks } from "../data/data";

const Contact = () => {
  const scrollUp = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Container id="contact">
      <Profile>
        <Slide direction="left" delay={1}>
          <h1>GET IN TOUCH</h1>
        </Slide>
        <div className="address">
          <Slide direction="left">
            <h1>
              Thank you for taking the time to review my portfolio. If you're
              interested in discussing any of the projects or skills showcased
              here, or have an opportunity you'd like to discuss, please don't
              hesitate to contact me.
            </h1>
          </Slide>
        </div>
        <div className="links">
          <div>
            <span>
              <FiPhoneCall />
            </span>
            <Slide direction="left">
              <a href="tel:+4733378901">+251935416737 </a>
            </Slide>
          </div>
          <div>
            <Slide direction="left">
              <span>
                <HiOutlineMailOpen />
              </span>
            </Slide>
            <Slide direction="left">
              <a href="mailto:miladamiri@gmail.com">
                yohansdegu.2010@gmail.com
              </a>
            </Slide>
          </div>
        </div>
        <div className="profiles">
          <div className="icons">
            {socialLinks.map((items) => (
              <Zoom>
                <span>
                  <a
                    href={items.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {items.icon}
                  </a>
                </span>
              </Zoom>
            ))}
          </div>
        </div>
        <Fade>
          <ArrowUp onClick={scrollUp}>
            <AiOutlineArrowUp />
          </ArrowUp>
        </Fade>
      </Profile>
      <Image>
        <img src={home} alt="profile" />
      </Image>
    </Container>
  );
};

export default Contact;

const Container = styled.div`
  margin-top: 2rem;
  position: relative;
  padding: 2rem 0;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 650px) {
    flex-direction: column;
    gap: 3rem;
  }
`;
const Profile = styled.div`
  flex: 1;
  .address {
    padding: 1rem 0;
    h1 {
      font-size: 1.2rem;
      color: lightgray;
    }

    p {
      width: 60%;
      padding-top: 0.5rem;
      @media (max-width: 650px) {
        width: 100%;
      }
    }
  }

  .links {
    h1 {
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
    }

    div {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      a {
        text-decoration: none;
        color: lightgray;
        font-size: 1.5rem;
        :hover {
          color: orange;
        }
      }
    }
  }

  .profiles {
    h1 {
      font-size: 1.2rem;
      padding: 1rem 0;
    }

    .icons {
      display: flex;
      align-items: center;
      margin-top: 2rem;

      span {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #000;
        width: 3rem;
        height: 3rem;
        margin-right: 0.5rem;
        border-radius: 50px;

        :hover {
          background-color: orange;
        }

        a {
          margin-top: 0.3rem;
          color: #fff;
        }
      }
    }
  }
`;
const ArrowUp = styled.div`
  width: 2rem;
  height: 2rem;
  background-color: #01be96;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.3rem;
  font-weight: 700;
  margin-top: 2rem;
  @media (max-width: 650px) {
    position: absolute;
    right: 3rem;
    top: 16rem;
  }
`;
const Image = styled.div`
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
      display: none;
    }
  }

  :hover img {
    transform: translateY(-10px);
  }
`;
