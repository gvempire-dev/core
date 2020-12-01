import * as React from 'react';
import Link from 'next/link';
import { css } from '@emotion/core';

import { ComponentStyles } from '../common/types';
import {
  pageTitle,
  contentContainer,
  section,
  sectionHeader,
  button,
  link,
  formWrapper,
  formHeader,
  formActions,
  formFieldset,
  formInput,
} from '../common/styles';
import useActiveLinks from './use-active-links';

const styles: ComponentStyles = {
  wrapper: (theme) => css`
    ${contentContainer(theme)};
    ${section(theme)};
    background-color: ${theme.colors.whiteAlpha[50]};
  `,
  logo: (theme) => css`
    ${pageTitle(theme)};
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 100%;
    margin-bottom: ${theme.space[12]};

    img {
      max-width: ${theme.space[24]};
      margin-bottom: ${theme.space[4]};
    }
  `,
  nav: (theme) => css`
    ${contentContainer(theme)};
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
  `,
  navList: (theme) => css`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    margin: ${theme.space[12]} ${theme.space[12]};

    @media (min-width: ${theme.breakpoints[2]}) {
      margin: ${theme.space[12]} ${theme.space[24]};
    }
  `,
  cta: (theme) => css`
    margin-bottom: ${theme.space[24]};
  `,
};

const Footer: React.FC = () => {
  const internalLinks = useActiveLinks([
    { text: 'Home', href: '/', active: false },
    { text: 'About', href: '/about', active: false },
    { text: 'Services', href: '/services', active: false },
    { text: 'Blog', href: '/blog', active: false },
  ]);

  const externalLinks = [
    {
      text: 'Gitlab',
      href: 'https://gitlab.com/gvempire',
    },
    { text: 'NPM', href: 'https://npmjs.com/search?q=%40gvempire' },
    {
      text: 'LinkedIn',
      href: 'https://linkedin.com/company/gvempire/',
    },
    {
      text: 'Dev.to',
      href: 'https://dev.to/gvempire',
    },
  ];

  return (
    <footer css={styles.wrapper}>
      <header css={sectionHeader}>
        <div css={styles.logo}>
          <img src="/logo__light.svg" alt="gvempire.dev" />
          <div>Good Vibes and Greater Ventures</div>
        </div>

        <div css={styles.cta} className="alt">
          <Link href="/contact" passHref>
            <a>
              <button css={button}>Get in Touch</button>
            </a>
          </Link>

          <span css={{ margin: 16 }}>or</span>

          <a href="http://calendly.com/gvempire/discover">
            <button css={button}>Schedule a call</button>
          </a>
        </div>

        <form
          css={formWrapper}
          action="https://tinyletter.com/gvempire"
          method="post"
          target="popupwindow"
          onSubmit={() => {
            window.open(
              'https://tinyletter.com/gvempire',
              'popupwindow',
              'scrollbars=yes,width=800,height=600',
            );
            return true;
          }}
        >
          <header css={formHeader}>
            <h2>Sign Up for `The Empire` Newsletter</h2>
          </header>

          <input type="hidden" value="1" name="embed" css={formInput} />

          <fieldset css={formFieldset}>
            <label
              htmlFor="tlemail"
              css={{
                visibility: 'hidden',
                height: '0px',
                width: '0px',
                margin: '0px',
                padding: '0px',
              }}
            >
              Email
            </label>
            <input
              id="tlemail"
              name="email"
              type="text"
              css={formInput}
              placeholder="Enter your email address"
            />
          </fieldset>

          <div css={formActions}>
            <button
              type="submit"
              css={button}
              className="outline success"
            >
              Subscribe
            </button>
          </div>
        </form>
      </header>

      <nav css={styles.nav}>
        <div css={styles.navList}>
          <header>
            <h2>Website</h2>
          </header>

          {internalLinks.map(({ href, text, active }) => (
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
        </div>

        <div css={styles.navList}>
          <header>
            <h2>Company</h2>
          </header>

          {externalLinks.map(({ href, text }) => (
            <a href={href} key={`nav-link-${text}`}>
              <button css={link}>{text}</button>
            </a>
          ))}
        </div>

        <div css={styles.navList}>
          <header>
            <h2>Legal</h2>
          </header>

          <Link href="/legal/privacy-policy" passHref>
            <a>
              <button css={link}>Privacy Policy</button>
            </a>
          </Link>
          <Link href="/legal/terms-of-service" passHref>
            <a>
              <button css={link}>Terms of Service</button>
            </a>
          </Link>
        </div>
      </nav>

      <div css={{ marginTop: 64, textAlign: 'right' }}>
        &copy; {new Date().getFullYear()} GVEMPIRE
      </div>
    </footer>
  );
};

export default Footer;
