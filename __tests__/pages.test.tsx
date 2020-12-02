import * as React from 'react';
import AboutPage from '../pages/about';
import BlogPage from '../pages/blog';
import ContactPage from '../pages/contact';
import IndexPage from '../pages/index';
import ServicesPage from '../pages/services';
import { render } from './setup-tests';

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

describe('<IndexPage>', () => {
  it.skip('matches snapshot', () => {
    const { container } = render(<IndexPage />);

    expect(container).toMatchSnapshot();
  });

  it('renders important information', () => {
    const { getAllByText } = render(<IndexPage />);

    expect(getAllByText(/gvempire/gi)).toBeTruthy();
    expect(getAllByText(/hire/gi)).toBeTruthy();
    expect(getAllByText(/start/gi)).toBeTruthy();
    expect(getAllByText(/testimonials/gi)).toBeTruthy();
    expect(getAllByText(/software/gi)).toBeTruthy();
    expect(getAllByText(/blog/gi)).toBeTruthy();
  });
});

describe('<AboutPage>', () => {
  it.skip('matches snapshot', () => {
    const { container } = render(<AboutPage />);

    expect(container).toMatchSnapshot();
  });

  it('renders important information', () => {
    const { getAllByText } = render(<AboutPage />);

    expect(getAllByText(/values/gi)).toBeTruthy();
    expect(getAllByText(/good vibes/gi)).toBeTruthy();
    expect(getAllByText(/greater ventures/gi)).toBeTruthy();
    expect(getAllByText(/start/gi)).toBeTruthy();
    expect(getAllByText(/faq/gi)).toBeTruthy();
    expect(getAllByText(/hourly rate/gi)).toBeTruthy();
    expect(getAllByText(/how long/gi)).toBeTruthy();
    expect(getAllByText(/designers/gi)).toBeTruthy();
  });
});

describe('<ServicesPage>', () => {
  it.skip('matches snapshot', () => {
    const { container } = render(<ServicesPage />);

    expect(container).toMatchSnapshot();
  });

  it('renders important information', () => {
    const { getAllByText } = render(<ServicesPage />);

    expect(getAllByText(/talk/gi)).toBeTruthy();
    expect(getAllByText(/commerce/gi)).toBeTruthy();
    expect(getAllByText(/static/gi)).toBeTruthy();
    expect(getAllByText(/progressive/gi)).toBeTruthy();
    expect(getAllByText(/workflow/gi)).toBeTruthy();
    expect(getAllByText(/start/gi)).toBeTruthy();
  });
});

describe('<BlogPage>', () => {
  it.skip('matches snapshot', () => {
    const { container } = render(<BlogPage />);

    expect(container).toMatchSnapshot();
  });

  it('renders important information', () => {
    const { getAllByText } = render(<BlogPage />);

    expect(getAllByText(/talk/gi)).toBeTruthy();
    expect(getAllByText(/learn/gi)).toBeTruthy();
  });
});

describe('<ContactPage>', () => {
  it.skip('matches snapshot', () => {
    const { container } = render(<ContactPage />);

    expect(container).toMatchSnapshot();
  });

  it('renders important information', () => {
    const { getAllByText } = render(<ContactPage />);

    expect(getAllByText(/help/gi)).toBeTruthy();
    expect(getAllByText(/@gvempire.dev/gi)).toBeTruthy();
    expect(getAllByText(/schedule/gi)).toBeTruthy();
    expect(getAllByText(/colorado/gi)).toBeTruthy();
    expect(getAllByText(/linkedin/gi)).toBeTruthy();
  });

  it('renders a contact form', () => {
    const { getByText, getByLabelText } = render(<ContactPage />);

    expect(getByText(/send us a message/gi)).toBeTruthy();
    expect(getByLabelText(/name/gi)).toBeTruthy();
    expect(getByLabelText(/email/gi)).toBeTruthy();
    expect(getByLabelText(/phone/gi)).toBeTruthy();
    expect(getByLabelText(/message/gi)).toBeTruthy();
    expect(getByText(/send message/gi)).toBeTruthy();
  });
});
