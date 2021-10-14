import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-gap: 8px 24px;
  grid-template-columns: 96px 1fr;
  justify-items: stretch;
  align-items: start;
  grid-template-areas:
    "logo position"
    "logo date"
    "logo job"
    "logo stack";
  margin-bottom: 36px;
`;

const Logo = styled.img`
  grid-area: logo;
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.05);
  padding: 4px;
  background: #fff;
  box-sizing: border-box;
`;

const LogoFiller = styled.span`
  grid-area: logo;
`;

const Position = styled.div`
  grid-area: position;
  font-size: 19px;
  font-weight: 700;
`;

const Date = styled.div`
  grid-area: date;
  font-size: 15px;
  font-style: italic;
`;

const Job = styled.div`
  grid-area: job;
`;

const Stack = styled.div`
  grid-area: stack;
  font-style: italic;
`;

export default function Experience() {
  return (
    <>
      <Wrapper>
        <Logo
          src="https://media-exp1.licdn.com/dms/image/C560BAQEbRFRvTT57vg/company-logo_100_100/0/1626077349867?e=1642032000&amp;v=beta&amp;t=f_SH0LXelXcMGGhQHZXsguHIGazRdiZWN0UNzMttcXw"
          alt="Swapcard"
        />
        <Position>Frontend developer / Swapcard</Position>
        <Date>Full remote / 2018 - now</Date>
        <Job>
          All-in-one virtual &amp; hybrid events platform. I work on the three
          web applications, designed for event organizers, exhibitors and
          attendees.
          <br />
          Tech team is organized in squads, using agile method.
        </Job>
        <Stack>
          Technical stack: React, Typescript, GraphQL, Apollo, NextJS,
          Storybook, Styled-components
        </Stack>
      </Wrapper>
      <Wrapper>
        <Logo
          src="https://media-exp1.licdn.com/dms/image/C560BAQHmwbbhcAwTKQ/company-logo_100_100/0/1595231957013?e=1642032000&amp;v=beta&amp;t=gjakIhInStbg3OpURw2zJI6vzR7LaqyN_emqM83VfLM"
          alt="Hexanet"
        />
        <Position>Frontend developer / Hexanet</Position>
        <Date>Le Mans / 2016 - 2018</Date>
        <Job>I worked for a final customer on a B2B e-commerce application</Job>
        <Stack>Technical stack: React, Redux, Javascript, Rest</Stack>
      </Wrapper>
      <Wrapper>
        <LogoFiller />
        <Position>Web developer / Hexanet</Position>
        <Date>Le Mans / 2007 - 2016</Date>
        <Job>
          I worked for many customers, doing website from scratch. I created
          some back-offices to manage lot of data.
        </Job>
        <Stack>Technical stack: HTML, CSS, Javascript, PHP, MySQL</Stack>
      </Wrapper>
    </>
  );
}
