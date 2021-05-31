import * as React from 'react';

type Props = {
  children?: React.ReactNode;
};

export function PostTitle({ children }: Props) {
  return <h1>{children}</h1>;
}
