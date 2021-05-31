import { Container } from '@features/theme';
import * as React from 'react';

export function Footer() {
  return (
    <footer>
      <Container>
        <div>
          <h3>Statically Generated with Next.js.</h3>
          <div>
            <a href='https://nextjs.org/docs/basic-features/pages'>
              Read Documentation
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
