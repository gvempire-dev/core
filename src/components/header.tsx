import * as React from 'react';
import Link from 'next/link';
import { css } from '@emotion/core';
import { motion } from 'framer-motion';

import { ComponentStyles } from '../common/types';
import { contentContainer, button, link } from '../common/styles';
import { fadeIn } from '../common/animations';
import useActiveLinks from './use-active-links';

export const styles: ComponentStyles = {
  wrapper: (theme) => css`
    position: fixed;
    top: 0;
    left: 50%;
    width: 100%;
    transform: translateX(-50%);
    background-color: ${theme.colors.background};
    padding: ${theme.space[2]} 0;
    box-shadow: ${theme.shadows.md};
    z-index: ${theme.zIndices.modal};
  `,
  logo: (theme) => css`
    ${link(theme)};
    display: flex;
    align-items: center;
    background-color: transparent;

    img {
      max-width: ${theme.space[8]};
      margin-right: ${theme.space[2]};
    }
  `,
  content: (theme) => css`
    ${contentContainer(theme)};
    padding: 0 ${theme.space[4]};
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (min-width) {
      padding: 0;
    }
  `,
  nav: (theme) => css`
    position: absolute;
    top: 0;
    left: -100%;
    height: 100vh;
    width: 50vw;
    z-index: 5;
    background-color: ${theme.colors.background};
    box-shadow: ${theme.shadows.lg};
    padding: ${theme.space[4]};
    transition: left 250ms ease-in;

    &.open {
      left: 0;
    }

    a {
      margin-bottom: ${theme.space[8]};
      display: block;

      button {
        display: block;
        width: 100%;
      }
    }

    @media (min-width: ${theme.breakpoints[1]}) {
      position: relative;
      left: 0;
      height: auto;
      width: auto;
      display: inline-flex;
      align-items: center;
      justify-content: space-between;
      background-color: transparent;
      box-shadow: none;
      padding: 0;

      a {
        margin-bottom: 0;
        display: inline-block;
      }
    }
  `,
  mobileNavButton: (theme) => css`
    ${button(theme)};

    @media (min-width: ${theme.breakpoints[1]}) {
      display: none;
    }
  `,
  navButton: (theme) => css`
    ${button(theme)};
    margin: 0 auto;

    @media (min-width: ${theme.breakpoints[1]}) {
      margin-left: ${theme.space[4]};
    }
  `,
};

const Header: React.FC = () => {
  const links = useActiveLinks([
    { text: 'Home', href: '/', active: false },
    { text: 'About', href: '/about', active: false },
    { text: 'Services', href: '/services', active: false },
    { text: 'Blog', href: '/blog', active: false },
  ]);

  const [isOpen, setIsOpen] = React.useState(false);

  const toggleNav = () => setIsOpen(!isOpen);

  return (
    <motion.header
      css={styles.wrapper}
      variants={fadeIn}
      initial="initial"
      animate="animate"
    >
      <div css={styles.content}>
        <Link href="/" passHref>
          <a>
            <button css={styles.logo} aria-label="go home">
              <img src="/logo__light.svg" alt="gvempire.dev" />
              GVEMPIRE
            </button>
          </a>
        </Link>

        <button css={styles.mobileNavButton} onClick={toggleNav}>
          menu
        </button>

        <nav
          css={styles.nav}
          className={`${isOpen ? 'open' : 'not-open'}`}
        >
          {links.map(({ href, text, active }) => (
            <Link href={href} passHref key={`nav-link-${text}`}>
              <a>
                <button
                  css={link}
                  className={`${active ? 'active' : 'not-active'}`}
                >
                  {text}
                </button>
              </a>
            </Link>
          ))}

          <Link href="/contact" passHref>
            <a>
              <button
                css={styles.navButton}
                className="outline success"
              >
                work with us
              </button>
            </a>
          </Link>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
