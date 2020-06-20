import React from "react";
import styled from "styled-components";

const FooterBox = styled.div`
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
`;

const Footer = () => {
  return (
    <FooterBox>
      <h3>
        powered by <strong>veris</strong>
      </h3>
    </FooterBox>
  );
};

export default Footer;
