import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import {
  NavbarItemDisplay,
  NavbarItemLink,
  NavbarItemsLayout,
  NavbarLayout,
  LogoLink,
  LogoImage,
  AdjustItem,
  NavbarMobile,
  NavbarItemMobileDisplay,
  NavbarItemsMobileLayout,
  NavbarItemMobileLink,
} from "./styles";
import Logo from "../../assets/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function CustomNavbar() {
  const [navToggle, setNavToggle] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    handleResize();
  });

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, [isMobile]);
  return (
    <NavbarLayout className="boon-400">
      <Container>
        <AdjustItem>
          <LogoLink href="#">
            <LogoImage src={Logo} />
          </LogoLink>
          {!isMobile ? (
            <NavbarItemsLayout>
              <NavbarItemDisplay>
                <NavbarItemLink href="#">Home</NavbarItemLink>
              </NavbarItemDisplay>
              <NavbarItemDisplay>
                <NavbarItemLink href="#">New Products</NavbarItemLink>
              </NavbarItemDisplay>
              <NavbarItemDisplay>
                <NavbarItemLink href="#">Women</NavbarItemLink>
              </NavbarItemDisplay>
              <NavbarItemDisplay>
                <NavbarItemLink href="#">Men</NavbarItemLink>
              </NavbarItemDisplay>
              <NavbarItemDisplay>
                <NavbarItemLink href="#">Kid</NavbarItemLink>
              </NavbarItemDisplay>
              <NavbarItemDisplay>
                <NavbarItemLink href="#">Accessories</NavbarItemLink>
              </NavbarItemDisplay>
            </NavbarItemsLayout>
          ) : null}
          {isMobile ? (
            <FontAwesomeIcon
              icon={navToggle ? faTimes : faBars}
              size="2x"
              color="#ffffff"
              onClick={() => setNavToggle(!navToggle)}
            />
          ) : null}
        </AdjustItem>
        {isMobile ? (
          navToggle ? (
            <NavbarMobile>
              <NavbarItemsMobileLayout>
                <NavbarItemMobileDisplay>
                  <NavbarItemMobileLink href="#">Home</NavbarItemMobileLink>
                </NavbarItemMobileDisplay>
                <NavbarItemMobileDisplay>
                  <NavbarItemMobileLink href="#">
                    New Products
                  </NavbarItemMobileLink>
                </NavbarItemMobileDisplay>
                <NavbarItemMobileDisplay>
                  <NavbarItemMobileLink href="#">Women</NavbarItemMobileLink>
                </NavbarItemMobileDisplay>
                <NavbarItemMobileDisplay>
                  <NavbarItemMobileLink href="#">Men</NavbarItemMobileLink>
                </NavbarItemMobileDisplay>
                <NavbarItemMobileDisplay>
                  <NavbarItemMobileLink href="#">Kid</NavbarItemMobileLink>
                </NavbarItemMobileDisplay>
                <NavbarItemMobileDisplay>
                  <NavbarItemMobileLink href="#">
                    Accessories
                  </NavbarItemMobileLink>
                </NavbarItemMobileDisplay>
              </NavbarItemsMobileLayout>
            </NavbarMobile>
          ) : null
        ) : null}
      </Container>
    </NavbarLayout>
  );
}
