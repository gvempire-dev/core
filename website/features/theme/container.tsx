import * as React from 'react';

type Props = {
  children?: React.ReactNode;
};

export function Container({ children }: Props) {
  return <div>{children}</div>;
}
