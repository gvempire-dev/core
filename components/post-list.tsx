import { css } from '@emotion/core';
import { motion } from 'framer-motion';
import Link from 'next/link';
import * as React from 'react';
import { fadeIn, fadeWithChildren } from '../common/animations';
import { button, pageBody, pageTitle, tagline } from '../common/styles';
import {
  ComponentStyles,
  PostEntry,
  PostMetaData,
} from '../common/types';
import postIndex from '../pages/blog/post-index';

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

export const PostCard: React.FC<{ metaData: PostMetaData }> = ({
  metaData: { publishDate, title, excerpt, slug, headerImage },
}) => (
  <motion.article
    css={styles.postCard}
    style={{
      background: !!headerImage
        ? `url(${headerImage})`
        : '/logo__light.svg',
    }}
    variants={fadeIn}
    initial="initial"
    animate="animate"
    exit="exit"
  >
    <span css={styles.postCardDate}>
      {new Date(publishDate).toDateString()}
    </span>
    <h3 css={styles.postCardTitle}>{title} </h3>
    <p css={styles.postCardExcerpt}>{excerpt}</p>

    <span css={styles.postCardActions}>
      <Link href={`/blog/${slug}`} passHref>
        <a>
          <button css={button}>Read More</button>
        </a>
      </Link>
    </span>
  </motion.article>
);

const PostList: React.FC<{
  sort?: (a: PostEntry, b: PostEntry) => number;
  filter?: (a: PostEntry) => boolean;
  limit?: number;
}> = ({
  sort = (a, b) => (a[1].publishDate < b[1].publishDate ? 1 : -1),
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
    {Object.entries(postIndex)
      .sort(sort)
      .filter(filter)
      .filter((_, idx) => (!!limit ? idx < limit : true))
      .map(([name, metaData]) => (
        <PostCard metaData={metaData} key={`post-card-${name}`} />
      ))}
  </motion.section>
);

export default PostList;
