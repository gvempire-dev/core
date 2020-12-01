import * as React from 'react';

import { motion } from 'framer-motion';

import { slideDown } from '../common/animations';

import {
  tagline as taglineStyles,
  lead as leadStyles,
  hero,
  pageTitle,
  buttonGroup,
} from '../common/styles';

const Hero: React.FC<{
  title: string | React.ReactNode;
  tagline?: string | React.ReactNode;
  lead?: string | React.ReactNode;
  centered?: boolean;
  children?: React.ReactNode;
}> = ({ tagline, title, lead, centered, children }) => (
  <motion.div
    css={hero}
    className={`${centered ? 'centered' : 'not-centered'}`}
    variants={slideDown}
    initial="initial"
    animate="animate"
  >
    {tagline && <span css={taglineStyles}>{tagline}</span>}
    <h1 css={pageTitle}>{title}</h1>
    {lead && <span css={leadStyles}>{lead}</span>}
    <div
      css={buttonGroup}
      className={`${centered ? 'centered' : 'not-centered'}`}
    >
      {children}
    </div>
  </motion.div>
);

export default Hero;
