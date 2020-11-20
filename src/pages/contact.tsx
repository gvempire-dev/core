import { css } from '@emotion/core';
import { motion } from 'framer-motion';
import unfetch from 'isomorphic-unfetch';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { fadeIn } from '../common/animations';
import {
  button,
  formActions,
  formFieldset,
  formHeader,
  formInput,
  formLabel,
  formWrapper,
  headerTitle,
  lead,
  link,
  pageTitle,
  tagline,
} from '../common/styles';
import { ComponentStyles } from '../common/types';

const styles: ComponentStyles = {
  pageContent: (theme) => css`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: ${theme.breakpoints[3]}) {
      flex-direction: row;
      justify-content: space-evenly;
    }
  `,
  contactInfo: (theme) => css`
    margin: 0 auto ${theme.space[24]};

    @media (min-width: ${theme.breakpoints[3]}) {
      margin-bottom: 0;
    }
  `,
};

const Contact = () => (
  <motion.div
    css={styles.pageContent}
    variants={fadeIn}
    initial="initial"
    animate="animate"
  >
    <div css={styles.contactInfo}>
      <span css={tagline}>get in touch</span>
      <h1 css={pageTitle}>How can we help?</h1>

      <p css={lead}>
        From project inquries to consultations to talking shop and more,
        we love to hear from you.
      </p>

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
          href="https://www.google.com/maps/place/Colorado+Springs,+CO"
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
    </div>

    <ContactForm />
  </motion.div>
);

const apiUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://gvempire.dev'
    : 'http://localhost:3000/api';

const fields = [
  {
    name: 'name',
    label: 'Name',
    type: 'text',
    placeholder: 'What `name` should we call you?',
    config: {
      required: 'name is required',
      maxLength: 32,
      minLength: 12,
    },
  },
  {
    name: 'email',
    label: 'Email',
    type: 'email',
    placeholder: "What's your favorite `email`?",
    config: {
      required: 'email is required',
      pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    },
  },
  {
    name: 'phone',
    label: 'Phone',
    type: 'tel',
    placeholder: "What's the best `phone` number to reach you?",
    config: {
      required: 'phone is required',
      maxLength: 11,
      minLength: 8,
    },
  },
  {
    name: 'message',
    label: 'Message',
    type: 'textarea',
    placeholder:
      'If you only had 240 characters, what `message` would you send?',
    size: 'full',
    config: {
      required: 'message is required',
      maxLength: 240,
    },
  },
];

const ContactForm = () => {
  const { register, handleSubmit } = useForm<{
    name: string;
    email: string;
    phone: string;
    message: string;
  }>();

  const [status, setStatus] = React.useState<string>('');

  const onSubmit = handleSubmit((data) => {
    setStatus('sending...');

    unfetch(`${apiUrl}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.ok) {
        return setStatus('Your message has been sent. Thank you!');
      } else {
        return setStatus(
          `There was an error sending your message: ${res.statusText}`,
        );
      }
    });
  });

  return (
    <form
      onSubmit={onSubmit}
      css={formWrapper}
      className={`${
        /sending/gi.test(status) ? 'disabled' : 'not-disabled'
      }`}
    >
      <header css={formHeader}>
        <h2 css={headerTitle}>{status || 'Send us a message'}</h2>
      </header>

      {fields.map(
        ({ name, label, placeholder, type, config, size }) => (
          <fieldset
            key={`form-input-${name}`}
            css={formFieldset}
            className={`${size || 'medium'}`}
          >
            <label htmlFor={name} css={formLabel}>
              {label}
            </label>
            {type === 'textarea' && (
              <textarea
                id={name}
                name={name}
                placeholder={placeholder}
                ref={register(config)}
                rows={5}
                css={formInput}
              />
            )}
            {['text', 'tel', 'email'].includes(type) && (
              <input
                id={name}
                type={type}
                name={name}
                placeholder={placeholder}
                ref={register(config)}
                css={formInput}
              />
            )}
          </fieldset>
        ),
      )}

      <div css={formActions}>
        <button type="submit" css={button}>
          send message
        </button>
      </div>
    </form>
  );
};

export default Contact;
