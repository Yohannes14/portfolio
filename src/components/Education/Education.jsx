import React from "react";
import styled from "styled-components";
import { Slide } from "react-awesome-reveal";
import logo from "../../asset/logo.png";
const Education = () => {
  return (
    <Container id="education">
      <Slide direction="down">
        <h1>Education</h1>
      </Slide>
      <Educations>
        <img src={logo} alt="logo" />

        <List>
          <h2>ADDIS ABABA UNIVERSITY</h2>
          <h4>Bachelor of degree in Information System</h4>
          <ul>
            <li>graduated year Sep 2021</li>
            <li>CGPA:3.60</li>
            <li>
              Relevant Courses: Data structure and algorithm,DBMS, Computer
              archtecture, System Analysis and design,Enterprise System(ERP),
              Object oriented (OOP) programming, AI, Networking.
            </li>
          </ul>
        </List>
      </Educations>
    </Container>
  );
};

export default Education;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  border-bottom: 3px solid white;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;

const Educations = styled.div`
  display: flex;
  align-items: center;
  gap: 5rem;
  padding-top: 1rem;
  margin: 0 auto;
  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: start;
  }
`;

const List = styled.div`
  li {
    padding: 0.3rem;
    color: lightgray;
    font-size: 1.1rem;
  }
  h4 {
    padding-bottom: 1rem;
  }
`;
