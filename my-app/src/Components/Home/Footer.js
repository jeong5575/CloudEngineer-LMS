import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #282c34;
  color: #fff;
  padding: 20px;
  text-align: center;
`;

const FooterText = styled.p`
  font-size: 14px;
  margin-bottom: 10px;
`;

const FooterLinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
`;

const FooterLinkItem = styled.li`
  margin: 0 10px;

  a {
    color: #fff;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #61dafb;
    }
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <div>
        <FooterText>&copy; 2023 Jeong Yu Seok. All rights reserved.</FooterText>
        <FooterLinkList>
          <FooterLinkItem><a href="/terms">Terms of Service</a></FooterLinkItem>
          <FooterLinkItem><a href="/privacy">Privacy Policy</a></FooterLinkItem>
          <FooterLinkItem><a href="/contact">Contact Us</a></FooterLinkItem>
        </FooterLinkList>
      </div>
    </FooterContainer>
  );
}

export default Footer;

