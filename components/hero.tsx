import { motion } from 'framer-motion';
import * as React from 'react';
import { slideDown } from '../common/animations';
import {
  buttonGroup,
  hero,
  lead as leadStyles,
  pageTitle,
  tagline as taglineStyles,
} from '../common/styles';
import { MotionTypes } from '../common/types';

const Hero: React.FC<{
  title?: string | React.ReactNode;
  tagline?: string | React.ReactNode;
  lead?: string | React.ReactNode;
  centered?: boolean;
  children?: React.ReactNode;
  as?: MotionTypes;
}> = ({ tagline, title, lead, centered, children, as = 'h1' }) => {
  const H1 = motion[as];

  return (
    <motion.div
      css={hero}
      className={`${centered ? 'centered' : 'not-centered'}`}
      variants={slideDown}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {tagline && <span css={taglineStyles}>{tagline}</span>}
      <H1 css={pageTitle}>{title}</H1>
      {lead && <span css={leadStyles}>{lead}</span>}
      <div
        css={buttonGroup}
        className={`${centered ? 'centered' : 'not-centered'}`}
      >
        {children}
      </div>
    </motion.div>
  );
};

export default Hero;
