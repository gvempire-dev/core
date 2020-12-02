import Link from 'next/link';
import * as React from 'react';
import { button } from '../common/styles';
import { Hero, PostList } from '../components';

const Blog = () => {
  return (
    <>
      <Hero
        title="Our thoughts and stories"
        lead="At GVEMPIRE we love to share what we've learned. Read through and follow our journey into who we are today."
        tagline="what we talk about"
      >
        <Link href="/contact" passHref>
          <a>
            <button type="button" css={button}>
              work with us
            </button>
          </a>
        </Link>
        <Link href="/about" passHref>
          <a>
            <button type="button" css={button}>
              learn more
            </button>
          </a>
        </Link>
      </Hero>

      <PostList />
    </>
  );
};

export default Blog;
