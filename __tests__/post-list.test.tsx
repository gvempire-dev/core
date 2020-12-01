import * as React from 'react';
import { render } from './setup-tests';
import { PostList } from '../components';

describe('<PostList>', () => {
  it.skip('matches snapshot', () => {
    const { container } = render(<PostList />);

    expect(container).toMatchSnapshot();
  });

  it('renders blog posts', () => {
    const { getAllByText } = render(<PostList />);

    expect(getAllByText(/2020/gi)).toBeTruthy();
    expect(getAllByText(/read more/gi)).toBeTruthy();
    expect(
      getAllByText(/past failures, big wins, and all of the things/gi),
    ).toBeTruthy();
  });
});
