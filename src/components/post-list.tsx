import { css } from '@emotion/core';
import { motion } from 'framer-motion';
import Link from 'next/link';
import * as React from 'react';
import { fadeIn, fadeWithChildren } from '../common/animations';
import { button, pageBody, pageTitle, tagline } from '../common/styles';
import { ComponentStyles } from '../common/types';
import postList from '../pages/blog/_index';

const styles: ComponentStyles = {
  postCard: (theme) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: ${theme.space[16]} 0;
    padding: ${theme.space[8]} 0;
    box-shadow: ${theme.shadows.lg};
    background-color: ${theme.colors.whiteAlpha[50]};

    @media (min-width: ${theme.breakpoints[3]}) {
      flex-direction: row;
      align-items: stretch;
      justify-content: space-around;
      padding: 0 0;
    }
  `,

  postCardImage: (theme) => css`
    order: -1;
    flex: 1 1 ${theme.space[64]};
    max-width: ${theme.space['sm']};
    max-height: 100%;
    margin: 0 auto;
    display: block;
    background-color: ${theme.colors.highlight};
    object-fit: cover;
    object-position: center;

    @media (min-width: ${theme.breakpoints[3]}) {
      border-top-left-radius: ${theme.radii.lg};
      border-bottom-left-radius: ${theme.radii.lg};
    }
  `,

  postCardContent: (theme) => css`
    flex: 1 1 65%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: ${theme.space[8]} ${theme.space[4]};
  `,
  postCardTagline: (theme) => css`
    ${tagline(theme)};

    font-size: ${theme.fontSizes['md']};
  `,
  postCardTitle: (theme) => css`
    ${pageTitle(theme)};
    font-size: ${theme.fontSizes['3xl']};
    font-weight: ${theme.fontWeights.semibold};
    margin-bottom: ${theme.space[2]};
  `,
  postCardBody: (theme) => css`
    ${pageBody(theme)};
    margin-bottom: ${theme.space[8]};
  `,
};

type PostMetaData = {
  title: string;
  slug: string;
  excerpt: string;
  publishDate: number;
  author?: string;
  authorLink?: string;
  timeToRead?: string;
  tags?: string[];
  headerImage?: string;
};

type PostEntry = [string, PostMetaData];

const PostList: React.FC<{
  sort?: (a: PostEntry, b: PostEntry) => number;
  filter?: (a: PostEntry) => boolean;
  limit?: number;
}> = ({
  sort = (a, b) => (a[1].publishDate < b[1].publishDate ? 1 : -1),
  filter = () => true,
  limit = 3,
}) => {
  return (
    <motion.section
      variants={fadeWithChildren}
      initial="initial"
      animate="animate"
    >
      {Object.entries(postList)
        .sort(sort)
        .filter(filter)
        .filter((_, idx) => idx < limit)
        .map(([name, metaData]) => (
          <PostCard metaData={metaData} key={`post-card-${name}`} />
        ))}
    </motion.section>
  );
};

export const PostCard: React.FC<{
  metaData: {
    publishDate: number;
    title: string;
    excerpt: string;
    slug: string;
    headerImage: string;
  };
}> = ({
  metaData: { publishDate, title, excerpt, slug, headerImage },
}) => (
  <motion.article
    css={styles.postCard}
    variants={fadeIn}
    initial="initial"
    animate="animate"
  >
    <header css={styles.postCardContent}>
      <span css={styles.postCardTagline}>
        {new Date(publishDate).toDateString()}
      </span>
      <h3 css={styles.postCardTitle}>{title} </h3>
      <p css={styles.postCardBody}>{excerpt}</p>

      <span css={styles.postCardActions}>
        <Link href={`/blog/${slug}`} passHref>
          <a>
            <button css={button}>Read More</button>
          </a>
        </Link>
      </span>
    </header>

    {headerImage ? (
      <img css={styles.postCardImage} src={headerImage} alt={title} />
    ) : (
      <div css={styles.postCardImage} />
    )}
  </motion.article>
);

export default PostList;
