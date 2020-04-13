import * as React from 'react';
import Footer from '../components/footer';
import { render } from './setup-tests';

describe('<Footer', () => {
  it.skip('matches snapshot', () => {
    const { container } = render(<Footer />);

    expect(container).toMatchSnapshot();
  });

  it('adds a border on `active` className', async () => {
    const { getByText } = render(<Footer />);

    const homeLink = getByText(/home/gi).parentElement;

    expect(homeLink).toBeTruthy();
    expect(homeLink).toHaveClass('active');
    expect(homeLink).toHaveStyle('border-bottom: 2px solid');
  });
});
