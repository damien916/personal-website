import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-gap: 8px;
  grid-template-columns: 1fr;
  margin-bottom: 36px;
`;

const Degree = styled.div`
  font-size: 19px;
  font-weight: 700;
`;

const School = styled.div`
  font-size: 15px;
  font-style: italic;
`;

export default function Education() {
  return (
    <>
      <Wrapper>
        <Degree>Three-year university degree in web development</Degree>
        <School>INSSET, Saint-Quentin, France, 2007</School>
      </Wrapper>
      <Wrapper>
        <Degree>Two-year university degree in computer science</Degree>
        <School>Lycée Paul Cornu, Lisieux, France, 2006</School>
      </Wrapper>
      <Wrapper>
        <Degree>High-school degree in electronic</Degree>
        <School>Lycée Alain, Alençon, France, 2004</School>
      </Wrapper>
    </>
  );
}
