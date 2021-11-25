import React from "react";
import styled from "styled-components";

import Linkedin from "./icons/linkedin";
import Twitter from "./icons/twitter";
import Github from "./icons/github";

const Wrapper = styled.div`
  display: grid;
  grid-gap: 24px;
  grid-template-columns: repeat(3, 64px);
  justify-content: center;
`;

const Link = styled.a.attrs({ target: "_blank" })`
  color: #2c3e50;
  transition: 300ms ease-in-out;

  &:hover {
    color: #16a085;
    transform: scale(1.1);
  }
`;

export default function Contact() {
  return (
    <Wrapper>
      <Link title="LinkedIn" href="https://fr.linkedin.com/in/damienvirlouvet">
        <Linkedin />
      </Link>
      <Link title="Twitter" href="https://twitter.com/damien916">
        <Twitter />
      </Link>
      <Link title="Github" href="https://github.com/damien916">
        <Github />
      </Link>
    </Wrapper>
  );
}
