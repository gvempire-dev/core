import * as React from 'react';
import Header from '../components/header';
import { render } from './setup-tests';

describe('<Header', () => {
  it.skip('matches snapshot', () => {
    const { container } = render(<Header />);

    expect(container).toMatchSnapshot();
  });

  it('adds a border on `active` className', async () => {
    const { getByText } = render(<Header />);

    const homeLink = getByText(/home/gi).parentElement;

    expect(homeLink).toBeTruthy();
    expect(homeLink).toHaveClass('active');
    expect(homeLink).toHaveStyle('border-bottom: 2px solid');
  });
});
