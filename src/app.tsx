import React from "react";
import styled from "styled-components";

import Experience from "./experience";
import Education from "./education";
import Contact from "./contact";

const Wrapper = styled.div`
  padding: 48px;
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 39px;
  line-height: 1.2em;
`;

const SubTitle = styled.h2`
  font-size: 27px;
  margin-bottom: 36px;
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
      <Title>👋 Hi there! I’m Damien,</Title>
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
