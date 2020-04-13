import * as React from 'react';
import Link from 'next/link';
import { css } from '@emotion/core';

import { ComponentStyles } from '../common/types';
import {
  flex,
  flexItem,
  flexItemImage,
  flexItemTitle,
  pageBody,
  button,
} from '../common/styles';
import { Hero, Section } from '../components';
import { projectTypes } from './index';

const workflow = [
  {
    title: "Setting up for the project's goals",
    text: `You want your web product to hit the highest performance
              scores? Be as secure as it possibly can? Or you want to'
              scale it to multiple languages in a blink of an eye? We
              got your back! We’ll get to know what’s most important for
              your success and have it in mind when choosing the best
              tech stack.`,
    image: '/planning.svg',
  },

  {
    title: 'Picking the right tools for the job',
    text: `Once we understand your project wants and needs it’s time
  to swim through the sea of technologies and choose the'
  best for your project. We’ll propose you a couple of
  options with their possible upsides and downsides. We
  leave the final decision to you, but we’ll always be close
  to help with advice.`,
    image: '/tech-stack.svg',
  },

  {
    title: 'Setting up a work environment',
    text: `
  When you give us the thumbs up, we’ll set up the project
  management environment to keep you in the loop as we work
  on the project. You’ll get an access to our Slack
  workspace, a Notion Document, a Github or Gitlab repository, and all other tools
  used during the development stage. You also get to choose
  how often you’d like to receive project updates from us
  and in what form should they be in.`,
    image: '/dev-environment.svg',
  },

  {
    title: 'Transparent project management',
    text: `
  Transparency is our core value and it mirrors in our
  practice. Throughout the project you’ll be able to access
  the code repository we’re working on and see what we’ve
  put together in real time. You’ll also have access to our
  time tracking app for your project to see how much time'
  each task consumed.`,
    image: '/project-management.svg',
  },

  {
    title: 'No need to say goodbye',
    text: `
  Rarely we see our work ending with the deployment. In most
  cases, we stay with our clients for a long time after
  developing the product. We handle their additional feature
  requests and ongoing web architecture maintenance, so they
  could focus on growing their business.`,
    image: '/goodbye.svg',
  },
];

const styles: ComponentStyles = {
  workflowHeader: (theme) => css`
    text-align: center;
    margin-bottom: ${theme.space[4]};
  `,
  workflowImage: (theme) => css`
    ${flexItemImage(theme)};

    margin-left: -${theme.space[24]};
  `,
  workflowGrid: (theme) => css`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: ${theme.space[8]};
    grid-column-gap: ${theme.space[24]};

    @media (min-width: ${theme.breakpoints[3]}) {
      grid-template-columns: repeat(2, 1fr);
    }
  `,
  workflowGridItem: (theme) => css`
    position: relative;

    counter-increment: workflow;
    z-index: 5;

    &:nth-of-type(even) {
      align-self: end;
      margin-top: 0;

      @media (min-width: ${theme.breakpoints[3]}) {
        margin-top: ${theme.space.lg};
      }
    }

    &:before {
      pointer-events: none;
      content: counter(workflow);
      position: absolute;
      right: -15%;
      text-align: center;
      width: 50%;
      font-size: ${theme.space['sm']};
      font-weight: ${theme.fontWeights.bold};
      line-height: 1;
      color: ${theme.colors.highlight};
      opacity: 0.3;
      z-index: -1;
    }
  `,
};

const Services = () => {
  return (
    <>
      <Hero
        title="Raise your page loading speed up to 10 times faster"
        tagline="what we do best"
        lead="Website performance can make or break your businesses,
          especially in these comptetitive times. Let's build a
          modern website, or PWA, that will bring you customers and help
          you stay on top of your competition."
      >
        <Link href="/contact" passHref>
          <a>
            <button type="button" css={button}>
              let&apos;s talk
            </button>
          </a>
        </Link>
      </Hero>

      <Section>
        <div css={flex}>
          {projectTypes.map(({ title, text, image }) => (
            <div css={flexItem} key={title}>
              <img css={flexItemImage} src={image} alt={title} />
              <h3 css={flexItemTitle}>{title}</h3>
              <p css={pageBody}>{text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Let's talk about the process" tagline="workflow">
        <div css={styles.workflowGrid}>
          {workflow.map(({ title, text, image }) => (
            <article
              css={styles.workflowGridItem}
              key={`workflow-${title}`}
            >
              <img css={styles.workflowImage} src={image} alt={title} />
              <h2 css={flexItemTitle}>{title}</h2>
              <p css={pageBody}>{text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Hero
        title="Ready to Get Started?"
        lead="Start your super-fast project with us or take your existing
          product to the next level."
        tagline="software developers for hire"
        centered
      >
        <Link href="/contact" passHref>
          <a>
            <button type="button" css={button}>
              work with us
            </button>
          </a>
        </Link>
      </Hero>
    </>
  );
};

export default Services;
