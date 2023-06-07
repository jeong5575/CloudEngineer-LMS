import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// import cloudIMG from "./cloudIMG.png";
const HeaderContainer = styled.header`
  background-color: #282c34;
  color: #fff;
  padding: 20px;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
`;

const NavItem = styled.li`
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
const styledcomponent= styled.a`

font-size: 14px;
color: #ce2239;
text-decoration: none;
margin-right: auto;
`
;

const LogoContainer =styled.div`


position: relative;
`;

const LogoIMG =styled.div`
background-color: white;
width: auto;

`;

const LogoText =styled.div`

font-size: 24px;
font-weight: bold;
color: #ce2239;
text-decoration: none;
/* 
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
background-color: none;
padding: 10px; */

`;

function Header() {
  return (
    <HeaderContainer>
      
      <nav>
        <NavList>
          <LogoContainer>
         {/* <LogoIMG> <img src={cloudIMG} style={{width:200 ,height:200}}alt='로고'/></LogoIMG> */}
        <LogoText><a>Cloud Engineer</a></LogoText>
        </LogoContainer>
          <NavItem><a href="/">Home</a></NavItem>
          <NavItem><a href="/attendance">Attendance</a></NavItem>
          <NavItem><a href="/Notice">Notice</a></NavItem>
          <NavItem><a href="/drive">Drive</a></NavItem>
          <NavItem><a href="/blog">Blog</a></NavItem>
          <NavItem><a href="/qnaboard">QnAboard</a></NavItem>
          <NavItem><a href="/restaurantReviews">RestaurantReviews</a></NavItem>
          <NavItem><a href="https://jeong5575.vercel.app/">About</a></NavItem>
        </NavList>
      </nav>

      <Routes>
        
      </Routes>


      
    </HeaderContainer>
  );
}

export default Header;