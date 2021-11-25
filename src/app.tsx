import React from "react";
import styled, { keyframes } from "styled-components";

import Experience from "./experience";
import Education from "./education";
import Contact from "./contact";

const Wrapper = styled.main`
  padding: 48px;
  max-width: 800px;
  margin: 0 auto;
`;

const shake = keyframes`
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }  
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }
  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }
  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
`;

const Title = styled.h1`
  font-size: 39px;
  line-height: 1.2em;

  span {
    display: inline-block;
    margin-right: 18px;
    cursor: grab;

    &:hover {
      animation: 1s ${shake} ease-out;
    }
  }
`;

const SubTitle = styled.h2`
  font-size: 27px;
  margin-bottom: 36px;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    bottom: -12px;
    left: 12px;
    width: 50px;
    height: 2px;
    background-color: #16a085;
    transition: 300ms ease-in-out;
  }

  &:hover {
    &:after {
      left: -12px;
      width: 60px;
    }
  }
`;

const Intro = styled.p`
  font-size: 21px;
  line-height: 1.6em;
`;

const Divider = styled.div`
  height: 1px;
  width: 80%;
  background: #e5e5e5;
  margin: 48px auto;
`;

export default function App() {
  return (
    <Wrapper>
      <Title>
        <span>👋 </span>Hi there! I’m Damien,
      </Title>
      <Intro>
        I’m a frontend developer and I’m used to work with React, Typescript,
        GraphQL, Styled-components. It sounds like a nice stack, isn’t it?
      </Intro>

      <Divider />

      <SubTitle>Work Experience</SubTitle>
      <Experience />

      <Divider />

      <SubTitle>Education</SubTitle>
      <Education />

      <Divider />

      <SubTitle>Contact</SubTitle>
      <Contact />
    </Wrapper>
  );
}
