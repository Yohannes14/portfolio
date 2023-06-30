import React, { useRef } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import ClientSlider from "./ClientSlider";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Slide } from "react-awesome-reveal";
import front from "../../asset/front.png";
import git from "../../asset/git.png";
import html from "../../asset/html.png";
import cyber from "../../asset/cyber.png";

let clients = [
  {
    name: "Introduction to Front-End Development",
    img_url: front,
    link: "https://coursera.org/share/b79ba831134bbef23c36768ca071b9d4",
    disc: `Distinguish between front-end, back-end, and full-stack developers, create and style a webpage with HTML,The benefits of working with UI frameworks.`,
  },
  {
    name: "Version Control",
    img_url: git,
    link: "https://coursera.org/share/b0af50e26f744432bcf866027660735d",
    disc: `Implement version control systems, use a gitHub repository create a github repository,Navigate and configure using the command line, Manage code revisions`,
  },
  {
    name: "Introduction to Cybersecurity",
    img_url: cyber,
    link: "https://drive.google.com/file/d/1LA8epyjkWHinliqwddQ3RcvEYAp_ctE1/view?usp=drive_link",
    disc: `Global implications of cyber threats,ways in which networks are vulnerable to attack, impact of cyber-attacks on industies`,
  },
  {
    name: "HTML5",
    img_url: html,
    link: "https://www.udemy.com/certificate/UC-e22a4611-a8f6-476e-b19f-a594eef58d54/",
    disc: `how to design quality websites using HTML and CSS,fundamentals of coding in CSS and how to style websites beautifully,create customizable forms in HTML5`,
  },
  {
    name: "CSS3 FlexBox Media Queries &CSS Grid",
    img_url: git,
    link: "https://www.udemy.com/certificate/UC-830a857a-eeb1-4211-83ad-c60bd02618f4/",
    disc: `Responsive web design and development, concepts of media queries and how to use them, CSS grid and how to use if=t for responsive web design`,
  },
];
var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: false,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 530,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Clients = () => {
  const arrowRef = useRef(null);
  let clientDisc = "";
  clientDisc = clients.map((item, i) => <ClientSlider item={item} key={i} />);
  return (
    <Container id="client">
      <Slide direction="left">
        <h1>Achievements And Certifications </h1>
      </Slide>
      <Testimonials>
        <Slider ref={arrowRef} {...settings}>
          {clientDisc}
        </Slider>
        <Buttons>
          <button onClick={() => arrowRef.current.slickPrev()}>
            <IoIosArrowBack />
          </button>
          <button onClick={() => arrowRef.current.slickNext()}>
            <IoIosArrowForward />
          </button>
        </Buttons>
      </Testimonials>
    </Container>
  );
};

export default Clients;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 4rem 0;

  @media (max-width: 840px) {
    width: 90%;
  }

  span {
    font-weight: 700;
    text-transform: uppercase;
  }

  h1 {
    padding-top: 1rem;
    text-transform: capitalize;
  }

  .slick-list,
  .slick-slider,
  .slick-track {
    padding: 0;
  }

  .slick-dots {
    text-align: left;
    margin-left: 1rem;
  }

  .slick-dots li button:before {
    content: "";
  }

  .slick-dots li button {
    width: 9px;
    height: 4px;
    background: linear-gradient(
      159deg,
      rgb(45, 45, 58) 0%,
      rgb(43, 43, 53) 100%
    );
    padding: 0.1rem;
    margin-top: 1rem;
    transition: all 400ms ease-in-out;
    border-radius: 50px;
  }

  .slick-dots li.slick-active button {
    background: #01be96;
    width: 15px;
  }

  .slick-dots li {
    margin: 0;
  }
`;

const Testimonials = styled.div`
  margin-top: 2rem;
  position: relative;
`;
const Buttons = styled.div`
  position: absolute;
  right: 0.7rem;
  bottom: -2rem;

  button {
    background-color: transparent;
    margin-left: 0.5rem;
    border: none;
    color: #01be96;
    cursor: pointer;
    font-size: 1.1rem;
  }

  @media (max-width: 530px) {
    display: none;
  }
`;
