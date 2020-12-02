import { css } from '@emotion/core';
import Link from 'next/link';
import * as React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import {
  button,
  flex,
  flexItem,
  flexItemImage,
  flexItemTitle,
  pageBody,
} from '../common/styles';
import { ComponentStyles } from '../common/types';
import { Hero, Section } from '../components';

const values = [
  {
    title: 'Good Vibes',
    text:
      "We communicate with each other honestly, even if the truth violates one's ego. We believe that in the long term only through good and honest communication with each other we can generate added value for our clients.",
    image: '/images/transparency.svg',
  },
  {
    title: 'Greater Ventures',
    text:
      "We're aiming to make the world a better place, one interface at a time. Each and every project we take on has a single aim to do something better, to make something greater, and to build something everyone involved is proud of.",
    image: '/images/rocket.svg',
  },
];

const questions = [
  {
    question: "What's your hourly rate?",
    answer:
      'The hourly rate we agree on depends on a couple of factors, like your project’s complexity. If you’d like to know the range of our prices you can schedule your free 1-on-1 consultation or send us a message.',
  },
  {
    question: 'How long will my project take?',
    answer:
      'Our projects typically take us between 4-8 weeks of development work. Of course, assuming that we have all the design assets provided.',
  },
  {
    question: 'How long has GVEMPIRE been around',
    answer:
      'Although all of us have been roaming the web and marketing world for a while, we’re a pretty young brand. Together, we started as a small web development shop for SMBs and GVEMPIRE (as in a shape you see today) was happily born in 2018.',
  },
  {
    question: 'Do you have your own designers?',
    answer:
      "As we’re the dev shop, not a design one, we don’t have any designers in-house. But good news here, we do know some world-class design agencies and freelancers, as we’ve been working with them on our previous projects many times. We'd be happy to supply a recommendation! ",
  },
];

export const styles: ComponentStyles = {
  banner: (theme) => css`
    text-align: center;
    padding: ${theme.space[24]} ${theme.space[4]};
    margin: ${theme.space[12]} auto;
    background-color: ${theme.colors.gray['300']};
    box-shadow: ${theme.shadows.md};
    color: ${theme.colors.blackAlpha['900']};
  `,
  bannerTitle: (theme) => css`
    font-size: ${theme.fontSizes['3xl']};
    margin-bottom: ${theme.space[2]};
  `,
  bannerText: (theme) => css`
    margin: 0 auto ${theme.space[4]};
    max-width: 48ch;
    line-height: ${theme.lineHeights.tall};
  `,
  accordian: (theme) => css`
    max-width: ${theme.space.lg};
    margin: 0 auto;
  `,
  accordianItem: (theme) => css`
    margin-bottom: ${theme.space[16]};
  `,
  accordianTitle: (theme) => css`
    display: block;
    width: 100%;
    background-color: ${theme.colors.text};
    color: ${theme.colors.background};
    padding: ${theme.space[4]};
    margin-bottom: ${theme.space[8]};

    &:hover {
      cursor: pointer;
      box-shadow: ${theme.shadows.sm};
    }
  `,
  accordianBody: (theme) => css`
    padding-left: ${theme.space[4]};
  `,
};

const AboutPage: React.FunctionComponent = () => (
  <>
    <Hero
      title="Good Vibes and Greater Ventures"
      tagline="core values"
      lead="Two promises we make to ourselves everyday and two guarantees to you with every project."
    >
      <Link href="/contact" passHref>
        <a>
          <button type="button" css={button}>
            Get Started
          </button>
        </a>
      </Link>
    </Hero>

    <Section>
      <div css={flex}>
        {values.map(({ title, text, image }) => (
          <div css={flexItem} key={title}>
            <img css={flexItemImage} src={image} alt={title} />
            <h3 css={flexItemTitle}>{title}</h3>
            <p css={pageBody}>{text}</p>
          </div>
        ))}
      </div>
    </Section>

    <Section
      title="Common questions you might have."
      tagline="faq"
      alternate
    >
      <Accordion css={styles.accordian}>
        {questions.map(({ question, answer }) => (
          <AccordionItem
            css={styles.accordianItem}
            key={`faq-${question}`}
          >
            <AccordionItemHeading css={styles.accordianTitle}>
              <AccordionItemButton>{question}</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel css={styles.accordianBody}>
              <p css={pageBody}>{answer}</p>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>

    <Section title="Our Recent Code Activity">
      <figure
        css={(theme) => css`
          margin: ${theme.space[8]} auto;
          width: 75%;
        `}
      >
        <embed src="https://wakatime.com/share/@tkjohnson121/93e8715d-9a15-4c63-aa24-c18fd4955ef1.svg"></embed>
      </figure>
    </Section>

    <section css={styles.banner}>
      <h2 css={styles.bannerTitle}>Ready?</h2>

      <p css={styles.bannerText}>
        We help you not only grow your businesses but also educate you
        to understand the tech behind it.
      </p>

      <Link href="/contact" passHref>
        <a>
          <button css={button}>start a project</button>
        </a>
      </Link>
    </section>
  </>
);

export default AboutPage;
