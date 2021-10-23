import styled from "styled-components";

export const AdjustItem = styled.div`
  position: relative;
  padding-top: 20px;
  padding-bottom: 20px;

  @media only screen and (max-width: 991px) {
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: space-between;
  }
`;

export const LogoLink = styled.a`
  position: relative;
  cursor: pointer;
  left: 0;
  z-index: 2;
`;

export const LogoImage = styled.img``;

export const NavbarLayout = styled.div`
  background: #ff6f61;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 999;
`;

export const NavbarItemsLayout = styled.ul`
  position: absolute;
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 1;
`;

export const NavbarItemDisplay = styled.li`
  display: inline-block;
  margin: 0 30px;

  @media only screen and (max-width: 991px) {
    margin: 0 10px;
  }
`;

export const NavbarItemLink = styled.a`
  color: #ffffff;
  cursor: pointer;
  text-decoration: none;

  :hover {
    color: #e5e5e5;
  }
`;

export const NavbarMobile= styled.div`
  position: relative;
  margin: 0;
  padding: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 99;
`;

export const NavbarItemsMobileLayout = styled.ul`
  position: relative;
  padding: 0;
`;

export const NavbarItemMobileDisplay = styled.li`
  display: block;
  padding: 10px 40px;
  text-align: center;
`;

export const NavbarItemMobileLink = styled.a`
  color: #ffffff;
  cursor: pointer;
  text-decoration: none;
`;
