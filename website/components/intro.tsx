import { CMS_NAME } from '@utils/constants';
import * as React from 'react';

export function Intro() {
  return (
    <section>
      <h1>Blog.</h1>
      <h4>
        A statically generated blog example using{' '}
        <a href='https://nextjs.org/'>Next.js</a> and {CMS_NAME}.
      </h4>
    </section>
  );
}
