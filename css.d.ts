/// <reference path="../../node_modules/@types/react/index.d.ts"/>
import { DOMAttributes } from 'react';
import { InteropWithTheme } from './src/common/types';

declare namespace React {
  interface HTMLAttributes<T> extends DOMAttributes<T> {
    css?: InteropWithTheme | { [key: string]: any };
  }
}
