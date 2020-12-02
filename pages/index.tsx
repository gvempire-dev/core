import { css } from '@emotion/core';
import Link from 'next/link';
import * as React from 'react';
import {
  button,
  centered,
  flex,
  flexItem,
  flexItemImage,
  flexItemTitle,
  pageBody,
  quoteCite,
} from '../common/styles';
import { ComponentStyles } from '../common/types';
import { Hero, PostList, Section } from '../components';

export const formula = [
  {
    title: 'Modern',
    text: `Often times, there’s no
      time-consuming and resource heavy queries slowing down your
      site. Static sites can be up to 10x faster, with
      benefits for the UX and SEO rankings.`,
    image: '/modern.svg',
  },
  {
    title: 'Minimalistic',
    text: `We like to keep things simple. This ensures that your
      site has a longlasting uptime without too much of a need
      for updates and mainteneance`,
    image: '/minimal.svg',
  },
  {
    title: 'Adventureful',
    text: `Our website are stable, safe,
      and scalable. They provide a better experience for your users and
      little to no downtime lets your website work for you.`,
    image: '/rocket.svg',
  },
];

export const technologies = [
  {
    title: 'DATA',
    items: ['Contentful', 'Storyblok', 'Sanity'],
  },
  {
    title: 'BUILD',
    items: ['React', 'Gatsby', 'Next', 'Node'],
  },
  {
    title: 'DEPLOY',
    items: ['Netlify', 'Zeit', 'Firebase', 'AWS'],
  },
  {
    title: 'COMMERCE',
    items: ['Shopify', 'Squarespace', 'Etsy', 'Stripe'],
  },
];

export const projectTypes = [
  {
    title: 'E-Commerce',
    text:
      "Whether you're selling music, online courses, or triangles -- we've got a bespoke website for you and your customers.",
    image: '/e-commerce.svg',
  },
  {
    title: 'Static Sites',
    text:
      'Get new customers with a faster website and higher SEO chances. We build them with proven technologies like React and Gatsby',
    image: '/static-websites.svg',
  },
  {
    title: "PWA's",
    text:
      'Have your own app availble on all platforms. Progressive Web Apps save you money and time with great performance and low hosting costs.',
    image: '/progressive-web-app.svg',
  },
];

export const testimonials = [
  {
    name: 'Talisa Music',
    href: 'https://talisamusic.com',
    text:
      'GVEMPIRE helped me out by revamping my website for me. The result was amazing! They came up with some fresh ideas that really made my website pop. One thing I liked the most was that KJ asked me what I wanted exactly and was willing to work with my needs. The whole experience was awesome, I love working with people who want to help other artists reach their goals. I would recommend GVEMPIRE to anyone who needs a website made!',
    image: '/talisamusic.png',
  },
  {
    name: 'Arnetris Green',
    href: 'https://juicyfits.com',
    text:
      'It was a pleasure working with you. I appreciate your patience with me and your continued support. Thanks for answering all of my calls.',
    image: '/juicyfits.png',
  },
];

export const styles: ComponentStyles = {
  testimonial: (theme) => css`
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: 'testimonial' 'image';
    grid-row-gap: ${theme.space[8]};

    margin-bottom: ${theme.space[32]};

    &:first-of-type {
      margin-top: ${theme.space[24]};
    }

    &:last-of-type {
      margin-bottom: 0;
    }

    @media (min-width: ${theme.breakpoints[3]}) {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr;
      grid-template-areas: 'testimonial image';
      grid-column-gap: ${theme.space[8]};
    }
  `,

  testimonialQuote: (theme) => css`
    ${centered(theme)};
    ${pageBody(theme)};
    justify-content: center;
    grid-area: testimonial;
    display: inline-flex;
    flex-direction: column;
    text-align: center;
    margin-bottom: ${theme.space[8]};
  `,

  testimonialImage: (theme) => css`
    grid-area: image;
    box-shadow: ${theme.shadows.md};
    max-width: 100%;
  `,
};

const useChangingText = (
  textArr: string[],
  length?: number,
): [string, React.Dispatch<React.SetStateAction<string>>] => {
  const [currentText, setCurrentText] = React.useState(textArr[0]);

  React.useEffect(() => {
    const timeout = setTimeout(
      () =>
        setCurrentText(
          textArr[
            // Next in line, loop back if needed
            (textArr.indexOf(currentText) + 1) % textArr.length
          ],
        ),
      length || 3000,
    );

    return () => clearTimeout(timeout);
  }, [currentText]);

  return [currentText, setCurrentText];
};

const IndexPage = () => {
  const [currentDescription] = useChangingText([
    'software engineers',
    'software developers',
    'web developers',
    'front-end developers',
    'back-end developers',
    'full-stack developers',
    '"ninja" developers',
    '"rockstar" developers',
  ]);

  return (
    <>
      <Hero
        tagline={`${currentDescription} for hire`}
        title="Welcome to the Empire"
        lead="Maximize your business potential with the latest and most
          innovative technologies."
        centered
      >
        <Link href="/contact" passHref>
          <a>
            <button type="button" css={button}>
              get started
            </button>
          </a>
        </Link>
        <Link href="/about" passHref>
          <a>
            <button
              type="button"
              css={button}
              className="outline success"
            >
              learn more
            </button>
          </a>
        </Link>
      </Hero>

      <Section
        title="How we support your business"
        tagline="a simple formula"
        lead="Using the power of today's tech, creative solutions,
            and a bit of elbow grease, we ship value to
            customers by saving them time, money, and mental sanity."
        alternate
      >
        <div css={flex}>
          {formula.map(({ title, text, image }) => (
            <div css={flexItem} key={title}>
              <img css={flexItemImage} src={image} alt={title} />
              <h3 css={flexItemTitle}>{title}</h3>
              <p css={pageBody}>{text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="What Clients Have to Say" tagline="testimonials">
        {testimonials.map(({ name, href, text, image }) => (
          <div css={styles.testimonial} key={`testimonial-${name}`}>
            <blockquote css={styles.testimonialQuote} cite={href}>
              {text}
              <span css={quoteCite}>
                {name} |{' '}
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {href}
                </a>
              </span>
            </blockquote>

            <img css={styles.testimonialImage} src={image} alt={href} />
          </div>
        ))}
      </Section>

      <Section
        title="The Right Tools for the Right Project"
        tagline="technologies"
        lead="Every project is a new story, yet some things stay the same.
            This means picking a dedicated set of tools for each one, depending on the your specific needs"
        alternate
      >
        <div css={flex}>
          {technologies.map(({ title, items }) => (
            <div css={flexItem} key={title}>
              <h3 css={flexItemTitle}>{title}</h3>
              {items.map((item) => (
                <p css={pageBody} key={item}>
                  {item}
                </p>
              ))}
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Perfect for SMB and Enterprise"
        lead="Cared for with diligence and created with the highest
            software-craftsmanship."
      >
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

      <Section title="Hot off the Blog" tagline="featured">
        <PostList limit={2} />
      </Section>

      <Hero
        title="Ready?"
        tagline="software developers for hire"
        lead="Start a new project or take an existing one to the next level."
      >
        <Link href="/contact" passHref>
          <a>
            <button type="button" css={button}>
              get started
            </button>
          </a>
        </Link>
      </Hero>
    </>
  );
};

export default IndexPage;
