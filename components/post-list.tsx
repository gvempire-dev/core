import { css } from '@emotion/core';
import { motion } from 'framer-motion';
import Link from 'next/link';
import * as React from 'react';
import { fadeIn, fadeWithChildren } from '../common/animations';
import { getPostSlug } from '../common/layouts/post';
import { button, pageBody, pageTitle, tagline } from '../common/styles';
import { ComponentStyles, PostFrontMatter } from '../common/types';
// @ts-ignore
import { frontMatter as postIndex } from '../pages/blog/*.mdx';

const styles: ComponentStyles = {
  postList: () => css`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-evenly;
  `,

  postCard: (theme) => css`
    position: relative;
    display: flex;
    flex: 0.5 1 auto;
    flex-direction: column;
    margin: ${theme.space[4]};
    padding: ${theme.space[8]};
    box-shadow: ${theme.shadows.lg};
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    z-index: 0;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background: ${theme.colors.blackAlpha[700]};
      z-index: -1;
    }
  `,

  postCardDate: (theme) => css`
    ${tagline(theme)};
    font-size: ${theme.fontSizes['md']};
  `,
  postCardTitle: (theme) => css`
    ${pageTitle(theme)};
    font-size: ${theme.fontSizes['3xl']};
    font-weight: ${theme.fontWeights.semibold};
    margin-bottom: ${theme.space[2]};
    max-width: 100%;
  `,
  postCardExcerpt: (theme) => css`
    ${pageBody(theme)};
    margin-bottom: ${theme.space[8]};
  `,
};

export const PostCard: React.FC<{ frontMatter: PostFrontMatter }> = ({
  frontMatter,
}) => (
  <motion.article
    css={styles.postCard}
    style={{
      background: !!frontMatter.headerImage
        ? `url(${frontMatter.headerImage})`
        : '/logo__light.svg',
    }}
    variants={fadeIn}
    initial="initial"
    animate="animate"
    exit="exit"
  >
    <span css={styles.postCardDate}>
      {new Date(frontMatter.date).toLocaleDateString()}
    </span>
    <h3 css={styles.postCardTitle}>{frontMatter.title} </h3>
    <p css={styles.postCardExcerpt}>{frontMatter.excerpt}</p>

    <span css={styles.postCardActions}>
      <Link href={`/blog/${getPostSlug(frontMatter)}`} passHref>
        <a>
          <button css={button}>Read More</button>
        </a>
      </Link>
    </span>
  </motion.article>
);

const PostList: React.FC<{
  sort?: (
    a: [string, PostFrontMatter],
    b: [string, PostFrontMatter],
  ) => number;
  filter?: (a: [string, PostFrontMatter]) => boolean;
  limit?: number;
}> = ({
  sort = (a, b) =>
    new Date(a[1].date).getTime() < new Date(b[1].date).getTime()
      ? 1
      : -1,
  filter = () => true,
  limit,
}) => (
  <motion.section
    variants={fadeWithChildren}
    initial="initial"
    animate="animate"
    exit="exit"
    css={styles.postList}
  >
    {Object.entries(postIndex as PostFrontMatter[])
      .sort(sort)
      .filter(filter)
      .filter((_, idx) => (!!limit ? idx < limit : true))
      .map(([name, frontMtter]) => (
        <PostCard frontMatter={frontMtter} key={`post-card-${name}`} />
      ))}
  </motion.section>
);

export default PostList;
