import { css } from '@emotion/core';
import * as React from 'react';
import { Section } from '../../components';
import { ComponentStyles, PostFrontMatter } from '../types';

const styles: ComponentStyles = {
  postHeader: (theme) => css`
    background-size: cover;
    background-position: center;
    position: relative;
    z-index: 0;
    padding: ${theme.space[8]};
    margin-bottom: ${theme.space[24]};

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      background-color: ${theme.colors.blackAlpha[700]};
      z-index: -1;
    }

    & > * {
      z-index: 2;
    }
  `,
  headerImage: () => css`
    max-width: 30%;
    margin: 0 auto;
    display: block;
  `,
  title: (theme) => css`
    font-size: ${theme.fontSizes['6xl']};
    line-height: ${theme.lineHeights['tall']};
  `,
  excerpt: (theme) => css`
    margin-bottom: ${theme.space[4]};
    max-width: 40ch;
  `,
  author: () => css``,
  publishDate: () => css``,
  statList: () => css`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
  `,
  tag: (theme) => css`
    padding: 0 ${theme.space[2]};
    background-color: ${theme.colors['primary']};
    border-radius: ${theme.radii['md']};
    margin-right: ${theme.space[2]};
  `,
};

export const DocsPage: React.FC<{ frontMatter: PostFrontMatter }> = ({
  frontMatter,
  children,
}) => (
  <Section as="article">
    <header
      style={{ backgroundImage: `url(${frontMatter.headerImage})` }}
      css={styles.postHeader}
    >
      <span>
        {new Date(frontMatter.publishDate).toLocaleDateString()}
      </span>
      <h1 css={styles.title}>{frontMatter.title}</h1>

      <p css={styles.excerpt}>{frontMatter.excerpt}</p>

      <ul css={styles.statList}>
        {frontMatter.tags?.map((tag) => (
          <li key={tag} css={styles.tag}>
            {tag}
          </li>
        ))}
      </ul>
    </header>

    {children}
  </Section>
);

export default DocsPage;
