import React from "react";
import styled from "styled-components";
import woman from "../components/img/woman.png";
import AnimatedShapes from "./AnimatedShapes";

const Container = styled.div`
  height: calc(100vh - 50px);
  display: flex;
  padding: 20px;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;
const Title = styled.h1`
  font-size: 60px;
  width: 60%;
  @media only screen and (max-width: 480px) {
    width: 100%;
    font-size: 50px;
  }
`;
const Desc = styled.p`
  width: 60%;
  font-size: 20px;
  margin-top: 20px;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Info = styled.div`
  width: 60%;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 480px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Button = styled.button`
  padding: 15px;
  background-color: darkblue;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
  border: none;
  letter-spacing: 2px;
  @media only screen and (max-width: 480px) {
    margin-bottom: 20px;
  }
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
`;
const Phone = styled.span`
  color: #f24d69;
  font-weight: bold;
`;
const ContactText = styled.span`
  color: gray;
  margin-top: 5px;
`;

const Left = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    width: 100%;
    height: 100%;
  }
`;

const Right = styled.div`
  width: 40%;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

const Img = styled.img`
  width: 100%;
`;

export const Intro = () => {
  return (
    <Container>
      <Left>
        <Title>Adventures in creative age</Title>
        <Desc>
          We believe that designing products and services in close partership
          with our clients is the only to have a real impact on their business.
        </Desc>
        <Info>
          <Button>START A PROJECT</Button>
          <Contact>
            <Phone>Call us 618 292 89 88</Phone>
            <ContactText>For any question or contact</ContactText>
          </Contact>
        </Info>
      </Left>
      <Right>
        <Img src={woman} />
      </Right>
      <AnimatedShapes />
    </Container>
  );
};
