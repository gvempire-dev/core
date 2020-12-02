import { css, keyframes } from '@emotion/core';
import emotionReset from 'emotion-reset';
import { ThemedStyles } from './types';

/**
 *
 * Animations
 *
 */

export const slide = keyframes`
  0% {
      background-position: 0% 50%;
  }
  50% {
      background-position: 100% 50%;
  }
  100% {
      background-position: 0% 50%;
  }
`;

/**
 *
 * Layout
 *
 */

export const centered: ThemedStyles = () => css`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 0 auto;
`;

export const contentContainer: ThemedStyles = (theme) => css`
  margin: 0 auto;

  @media (min-width: ${theme.breakpoints[1]}) {
    max-width: ${theme.space['2xl']};
  }

  @media (min-width: ${theme.breakpoints[3]}) {
    max-width: ${theme.space['5xl']};
  }

  @media (min-width: ${theme.breakpoints[5]}) {
    max-width: ${theme.space['6xl']};
  }

  @media (min-width: 100rem) {
    max-width: 80%;
  }
`;

export const absoluteCover: ThemedStyles = () => css`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center center;
`;

export const hero: ThemedStyles = (theme) => css`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  padding: ${theme.space['32']} ${theme.space[0]};
  position: relative;
  z-index: ${theme.zIndices['overlay']};

  &.centered {
    ${centered(theme)};
    padding: ${theme.space['32']} ${theme.space[8]};

    @media (min-width: ${theme.breakpoints[3]}) {
      padding: ${theme.space['32']} ${theme.space[0]};
    }
  }

  &.with-overlay {
    color: ${theme.colors.whiteAlpha['900']};

    &:before {
      ${absoluteCover(theme)};
      content: '';
      z-index: -1;
      pointer-events: none;
      background-color: ${theme.colors.blackAlpha['600']};
    }
  }

  & > .hero-bg {
    ${absoluteCover(theme)};
    min-height: 100%;
    width: 100%;
    pointer-events: none;
    z-index: -2;
  }
`;

export const section: ThemedStyles = (theme) => css`
  padding: ${theme.space[24]} ${theme.space[4]};
  margin: ${theme.space[4]} auto;

  &.alternate {
    background-color: ${theme.colors.whiteAlpha[50]};
    box-shadow: ${theme.shadows.lg};
  }
`;

export const sectionHeader: ThemedStyles = (theme) => css`
  text-align: center;
  margin-bottom: ${theme.space[8]};
`;

export const flex: ThemedStyles = (theme) => css`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  padding: ${theme.space[1]};
`;
export const flexItem: ThemedStyles = (theme) => css`
  ${centered(theme)};
  flex: 1 1 ${theme.space[64]};
  margin: ${theme.space[4]} ${theme.space[8]};
  display: inline-flex;
  flex-direction: column;
`;
export const flexItemImage: ThemedStyles = (theme) => css`
  height: ${theme.space[64]};
  width: 100%;
  padding: ${theme.space[8]};
`;
export const flexItemTitle: ThemedStyles = (theme) => css`
  font-size: ${theme.fontSizes['2xl']};
  margin-top: ${theme.space[4]};
  margin-bottom: ${theme.space[2]};
  text-transform: uppercase;
  letter-spacing: ${theme.letterSpacings.widest};
`;

/**
 *
 * Typography
 *
 */

export const pageTitle: ThemedStyles = (theme) => css`
  font-size: ${theme.fontSizes['5xl']};
  line-height: ${theme.lineHeights.tall};
  font-weight: ${theme.fontWeights.semibold};
  letter-spacing: ${theme.letterSpacings.wide};
  margin: ${theme.space[3]} 0;
  max-width: 24ch;
`;

export const pageBody: ThemedStyles = (theme) => css`
  font-size: ${theme.fontSizes.md};
  line-height: ${theme.lineHeights.tall};
  font-weight: ${theme.fontWeights.medium};
  letter-spacing: ${theme.letterSpacings.normal};
  max-width: ${theme.space['2xl']};
  max-width: 48ch;
`;

export const link: ThemedStyles = (theme) => css`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  color: ${theme.colors.text};
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: ${theme.borders['2px']};
  border-color: transparent;
  background-color: transparent;
  opacity: 0.75;
  padding: ${theme.space[2]} ${theme.space[2]};
  transition: border 150ms ease-in;

  &.inline {
    padding: 0 ${theme.space[2]};
  }

  &:hover,
  &:focus,
  &.active {
    opacity: 1;
    border-bottom: ${theme.borders['2px']};
    border-color: ${theme.colors.primary};
    background-color: ${theme.colors.whiteAlpha['50']};
  }

  &:focus {
    box-shadow: ${theme.shadows.outline};
    transform: scale(1.05);
  }

  // Add arrow for external links
  &[href^='http'],
  &[target='_blank'] {
    &::after {
      content: '↗️';
      margin-left: ${theme.space[2]};
      color: inherit;
    }
  }

  & > button {
    cursor: pointer;
    background-color: transparent;
    color: inherit;
    border: none;
    padding: 0;
    margin: 0;
    display: inline-flex;

    &:focus {
      box-shadow: ${theme.shadows.outline};
    }
  }
`;

export const tagline: ThemedStyles = (theme) => css`
  ${pageBody(theme)};
  opacity: 0.75;
  text-transform: uppercase;
  letter-spacing: ${theme.letterSpacings.wider};
`;

export const lead: ThemedStyles = (theme) => css`
  ${pageBody(theme)};
  opacity: 0.75;
  max-width: 48ch;
`;

export const headerTitle: ThemedStyles = (theme) => css`
  ${pageBody(theme)};
  font-size: ${theme.fontSizes['3xl']};
  margin-bottom: ${theme.space[2]};
  max-width: 32ch;
  margin: 0 auto;
`;

export const headerLead: ThemedStyles = (theme) => css`
  ${pageBody(theme)};
  opacity: 0.75;
  margin: 0 auto;
  max-width: 48ch;
`;

export const blockquote: ThemedStyles = (theme) => css`
  ${pageBody(theme)};
  max-width: 100%;
  position: relative;
  margin-left: ${theme.space[8]};
  margin-top: ${theme.space[8]};
  margin-bottom: ${theme.space[8]};
  background-color: ${theme.colors.whiteAlpha['300']};
  padding: ${theme.space[4]};

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: ${theme.space[2]};
    background-color: ${theme.colors.secondary};
  }
`;

export const quoteCite: ThemedStyles = (theme) => css`
  ${pageBody(theme)};
  font-weight: ${theme.fontWeights.semibold};

  a {
    color: ${theme.colors.success};
    text-decoration: none;
    opacity: 0.75;

    &:hover {
      opacity: 1;
      text-decoration: underline;
    }
  }

  &:before {
    content: '- ';
  }
`;

/**
 *
 * Buttons
 *
 */

export const button: ThemedStyles = (theme) => css`
  font-size: ${theme.fontSizes.md};
  padding: ${theme.space[2]} ${theme.space[4]};
  border: ${theme.borders['2px']};
  border-color: ${theme.colors.primary};
  background-color: ${theme.colors.primary};
  color: ${theme.colors.whiteAlpha['900']};
  box-shadow: ${theme.shadows.lg};
  transition: transform 250ms ease-out;
  text-transform: capitalize;
  text-decoration: none;
  white-space: nowrap;

  &:hover,
  &:focus {
    cursor: pointer;
    box-shadow: ${theme.shadows.xl}, ${theme.shadows.outline};
    transform: scale(1.05);
  }

  &:active {
    cursor: pointer;
    box-shadow: ${theme.shadows.sm};
    transform: scale(0.95);
  }

  &.text-dark {
    color: ${theme.colors.blackAlpha['900']};
  }

  &.secondary {
    border-color: ${theme.colors.secondary};
    background-color: ${theme.colors.secondary};
  }

  &.highlight {
    border-color: ${theme.colors.highlight};
    background-color: ${theme.colors.highlight};
  }

  &.error {
    border-color: ${theme.colors.error};
    background-color: ${theme.colors.error};
  }

  &.success {
    border-color: ${theme.colors.success};
    background-color: ${theme.colors.success};
  }

  &.info {
    border-color: ${theme.colors.info};
    background-color: ${theme.colors.info};
  }

  &.warning {
    border-color: ${theme.colors.warning};
    background-color: ${theme.colors.warning};
  }
  &.muted {
    border-color: ${theme.colors.muted};
    background-color: ${theme.colors.muted};
  }

  &.outline {
    color: ${theme.colors.text};
    background-color: transparent;
  }
`;

export const buttonGroup: ThemedStyles = (theme) => css`
  width: 100%;
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  margin-top: ${theme.space[4]};

  button {
    margin-right: ${theme.space[4]};
  }

  &.centered {
    ${centered(theme)};
    margin: ${theme.space[4]} auto;
  }
`;

/**
 *
 * Form
 */

export const formWrapper: ThemedStyles = (theme) => css`
  max-width: ${theme.space.md};
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-items: start;
  margin: 0 auto;

  &.disabled {
    input,
    textarea,
    select,
    label,
    fieldset,
    button,
    span {
      opacity: 0.65;
      pointer-events: none;
    }
  }

  @media (min-width: ${theme.breakpoints[3]}) {
    flex: 1 1 auto;
  }
`;

export const formHeader: ThemedStyles = (theme) => css`
    flex: 1 1 100%;
    padding ${theme.space[4]};
    text-align: center;

  `;

export const formActions: ThemedStyles = () => css`
  flex: 1 1 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const formFieldset: ThemedStyles = (theme) => css`
  flex: 1 1 45%;
  display: grid;
  grid-auto-flow: rows;
  margin: 0 ${theme.space[4]} ${theme.space[8]};

  &.full {
    flex: 1 1 100%;
  }
`;

export const formLabel: ThemedStyles = (theme) => css`
  ${pageBody(theme)};
  margin-bottom: ${theme.space[2]};
`;

export const formInput: ThemedStyles = (theme) => css`
  ${pageBody(theme)};
  margin-bottom: ${theme.space[2]};
  width: 100%;
  max-width: 100%;
  padding: ${theme.space[2]};
  box-shadow: ${theme.shadows.lg};
  border: none;
  background-color: ${theme.colors.whiteAlpha['900']};
`;

/**
 *
 * Gobal
 */

export const globalStyles: ThemedStyles = (theme) => css`
  ${emotionReset}

  *,
        *:before,
        *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body,
  main {
    max-width: 100vw;
    min-height: 100vh;
    background-color: ${theme.colors.background};
    color: ${theme.colors.text};
  }

  main {
    ${contentContainer(theme)};
    padding: ${theme.space[16]} ${theme.space[4]};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: ${theme.fontWeights.semibold};
    font-family: ${theme.fonts.heading};
    letter-spacing: ${theme.letterSpacings.wider};
    line-height: ${theme.lineHeights.taller};
  }

  p,
  span,
  a,
  ol,
  ul,
  li,
  blockquote,
  button {
    line-height: ${theme.lineHeights.tall};
    font-weight: ${theme.fontWeights.medium};
    font-family: ${theme.fonts.body};
    font-size: ${theme.fontSizes.md};
    letter-spacing: ${theme.letterSpacings.normal};
    max-width: ${theme.space['2xl']};
  }

  a {
    text-decoration: none;
  }
`;
