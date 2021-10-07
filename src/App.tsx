import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 48px;
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 39px;
`;

const SubTitle = styled.p`
  font-size: 21px;
`;

export default function App() {
  return (
    <Wrapper>
      <Title>👋 Hi there! I’m Damien,</Title>
      <SubTitle>
        I’m a frontend developer and I’m used to work with React, Typescript,
        GraphQL, styled-components. It sounds like a nice stack, isn’t it?
      </SubTitle>
    </Wrapper>
  );
}
