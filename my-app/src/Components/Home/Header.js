import React from 'react';
import styled from 'styled-components';

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

function Header() {
  return (
    <HeaderContainer>
      <nav>
        <NavList>
          <NavItem><a href="/">Home</a></NavItem>
          <NavItem><a href="/courses">Courses</a></NavItem>
          <NavItem><a href="/drive">Drive</a></NavItem>
          <NavItem><a href="/blog">Blog</a></NavItem>
          <NavItem><a href="/qnaboard">QnAboard</a></NavItem>
          <NavItem><a href="/about">About</a></NavItem>
          <NavItem><a href="/restaurantReviews">RestaurantReviews</a></NavItem>
        </NavList>
      </nav>
    </HeaderContainer>
  );
}

export default Header;