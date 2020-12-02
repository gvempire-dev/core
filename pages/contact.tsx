import * as React from 'react';
import { link } from '../common/styles';
import { Hero } from '../components';

const Contact = () => (
  <Hero
    title="How can we help?"
    tagline="get in touch"
    lead="From project inquries to consultations to talking shop and more,
        we love to hear from you."
    centered
  >
    <p>
      You can reach out directly to{' '}
      <a href="mailto:team@gvempire.dev" css={link}>
        team@gvempire.dev
      </a>
    </p>

    <p>
      You can also{' '}
      <a href="https://calendly.com/gvempire/discover" css={link}>
        schedule a time
      </a>{' '}
      to speak with us.
    </p>

    <p>
      We&apos;re based out of{' '}
      <a
        href="https://www.google.com/maps/place/Gainesville,+FL"
        css={link}
      >
        Gainesville, FL
      </a>
    </p>

    <p>
      Check out our{' '}
      <a href="http://gitlab.com/gvempire" css={link}>
        open source projects
      </a>
    </p>

    <p>
      You can find us online on{' '}
      <a href="http://twitter.com/gvempire_dev" css={link}>
        twitter
      </a>
      ,{' '}
      <a href="http://linkedin.com/company/gvempire" css={link}>
        linkedin
      </a>
      , and{' '}
      <a href="http://dev.to/gvempire" css={link}>
        dev.to
      </a>
    </p>
  </Hero>
);

export default Contact;
