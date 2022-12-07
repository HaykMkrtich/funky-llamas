import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import cn from 'classnames';

import logo from './assets/logo.svg';
import close from './assets/hamburger_close.svg';
import open from './assets/hamburger_open.svg';
import social from './assets/social_icon.svg';
import { routes } from '../../constants/routes';

const links = [
  { href: routes.HOME, label: 'Home' },
  { href: routes.LAZE_LOFT, label: 'Laze loft' },
  { href: routes.FUNKY_MAP, label: 'Funky map' },
  { href: routes.WHITE_PAPER, label: 'Whitepaper' },
];
const socialLinks = [
  { href: 'https://magiceden.io/', img: social },
  { href: 'https://magiceden.io/', img: social },
  { href: 'https://magiceden.io/', img: social },
];
function Header(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  const isMobile = useMediaQuery({
    query: '(max-width: 920px)',
  });
  return (
    <Wrapper>
      <div className="header_left">
        <a href="/">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
        </a>
      </div>

      <div className={cn({ mobile_menu: isMobile, header_right: !isMobile })}>
        {isMobile && (
          <button className="hamburger" onClick={() => setIsOpen((s) => !s)}>
            <img src={isOpen ? close : open} alt="" />
          </button>
        )}
        <div className={cn('nav', { open: isOpen })}>
          <nav>
            <ul className="menu">
              {links.map((link) => (
                <li key={`nav_${link.href}`}>
                  <NavLink to={link.href} className={({ isActive }) => (isActive ? 'active' : '')}>
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className="social_links">
            <ul>
              {socialLinks.map((link, index) => (
                <li key={`social_link_${index}`}>
                  <a href={link.href}>
                    <img src={link.img} alt="" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  height: 108.34px;
  @media screen and (max-width: 920px) {
    justify-content: center;
  }
  .header_left {
    .logo {
      padding-top: 15px;

      img {
        width: 200px;
      }
    }
  }
  .nav {
    display: flex;
    ul.menu li a {
      font-weight: 700;
      font-size: 20.6579px;
      line-height: 150%;
      color: var(--var-primary-text-color);
      padding-right: 11px;
      padding-left: 11px;
      text-transform: uppercase;
    }
  }
  .social_links {
    ul {
      display: flex;
      align-self: flex-start;
      margin-left: 2px;
      gap: 0;
      li {
        background-color: var(--var-primary-color);
        display: flex;
        align-items: center;
        justify-content: center;
        width: 29px;
        height: 29px;
        margin-left: 9px;
        a div {
          background-color: var(--var-primary-color);
          display: flex;
          align-items: center;
          justify-content: center;
          width: 29px;
          height: 29px;
        }
      }
    }
  }

  .header_right {
    display: flex;
    align-items: center;
    margin-top: 22px;
    margin-right: 30px;
    .nav ul.menu {
      display: flex;
      align-items: center;
      gap: 22px;
      li a {
        text-decoration: none;
        &.active {
          color: #fff0da;
          background-color: var(--var-primary-color);
        }
      }
    }
  }
  .mobile_menu {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    .hamburger {
      position: absolute;
      right: 20px;
      top: 17px;
      border: none;
      background-color: transparent;
    }
    .nav {
      position: fixed;
      width: 100%;
      top: 110px;
      height: calc(100vh - 90px);
      z-index: 20;
      background: #fff0da;
      display: none;

      &.open {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      nav {
        margin: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px dashed #edd7ae;
        height: calc(100% - 105px);
        width: calc(100% - 48px);
        ul li {
          margin: 16px 0;
          text-align: center;
          a {
            text-decoration-line: underline;
            color: var(--var-primary-text-color);
            text-align: center;
          }
        }
      }
    }
    .social_links {
      margin-bottom: 60px;
    }
  }
`;

export default Header;
