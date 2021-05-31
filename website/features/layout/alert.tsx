import { Container } from '@features/theme';
import * as React from 'react';

type Props = {
  preview?: boolean;
};

export function Alert({ preview }: Props) {
  return (
    <div>
      <Container>
        <div>
          {preview && (
            <p>
              This page is a preview. <a href='/api/exit-preview'>Click here</a>{' '}
              to exit preview mode.
            </p>
          )}
        </div>
      </Container>
    </div>
  );
}
