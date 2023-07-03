import React from "react";
import styled from "styled-components";

const CertificationSlider = ({ item: { name, link, img_url, disc } }) => {
  return (
    <Container>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <Header>
          <img src={img_url} alt={"kl"} />
        </Header>
        <h3>{name}</h3>
        <Body>{disc}</Body>
      </a>
    </Container>
  );
};

export default CertificationSlider;

const Container = styled.div`
  border: 1px solid;
  padding: 1.5rem 1rem;
  margin: 0 1rem;
  a {
    color: #fff;
    text-decoration: none;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 100%;
    height: 10rem;
  }
`;
const Body = styled.p`
  font-size: 0.8rem;
  padding-top: 1rem;
  margin-bottom: 1.5rem;
`;
