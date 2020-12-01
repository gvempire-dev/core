import * as React from 'react';
import PropTypes from 'prop-types';
import {
  render,
  RenderOptions,
  RenderResult,
} from '@testing-library/react';
import { ThemeProvider } from 'emotion-theming';
import { theme } from '../themes';

import '@testing-library/jest-dom/extend-expect';

/**
 * Mocking
 *
 */

jest.mock('../pages/blog/_index.js', () => ({
  'a-look-into-2020': {
    title: 'A Look into 2020',
    slug: 'a-look-into-2020',
    excerpt:
      'In this issue we discuss past failures, big wins, and all of the things you can be expecting from us in the next year',
    author: 'Khari Johnson',
    authorLink: 'https://gvempire.dev',
    publishDate: 1580591795000,
    timeToRead: '3 min',
    tags: ['gvempire', 'recap', 'retrospective'],
    headerImage:
      'https://images.pexels.com/photos/282909/pexels-photo-282909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
}));

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '/',
      query: '',
      asPath: '',
    };
  },
}));

/**
 * Component Wrapper
 */

const AllProviders: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

AllProviders.propTypes = {
  children: PropTypes.node.isRequired,
};

type CustomRender = (ui: any, options?: RenderOptions) => RenderResult;

const customRender: CustomRender = (ui, options) =>
  render(ui, { wrapper: AllProviders, ...options });

/**
 * Custom Error Handling
 */

const originalError = console.error;

beforeAll(() => {
  console.error = (...args: any) => {
    if (/Warning.*overlapping act/.test(args[0])) {
      return;
    }
    if (/IDB requires a browser environment/.test(args[0])) {
      return;
    }
    originalError.call(console, ...args);
  };
});

afterAll(() => {
  console.error = originalError;
});

export * from '@testing-library/react';

export { customRender as render };
