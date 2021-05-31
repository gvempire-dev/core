import * as React from 'react';
import { Alert } from './alert';
import { Footer } from './footer';
import { Meta } from './meta';

type Props = {
  preview?: boolean;
  children: React.ReactNode;
};

export function Layout({ preview, children }: Props) {
  return (
    <>
      <Meta />
      <div>
        <Alert preview={preview} />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
