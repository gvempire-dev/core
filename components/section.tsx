import { motion } from 'framer-motion';
import * as React from 'react';
import { fadeWithChildren, slideDown } from '../common/animations';
import {
  headerLead,
  headerTitle,
  section,
  sectionHeader,
  tagline as taglineStyles,
} from '../common/styles';
import { MotionTypes } from '../common/types';

const Section: React.FC<{
  tagline?: string | React.ReactNode;
  title?: string | React.ReactNode;
  lead?: string | React.ReactNode;
  alternate?: boolean;
  children?: React.ReactNode;
  as?: MotionTypes;
}> = ({
  tagline,
  title,
  lead,
  alternate,
  children,
  as = 'section',
}) => {
  const MotionComp = motion[as];

  return (
    <MotionComp
      css={section}
      className={`${alternate ? 'alternate' : 'default'}`}
      variants={fadeWithChildren}
      initial="initial"
      animate="animate"
    >
      {(tagline || title || lead) && (
        <motion.header
          css={sectionHeader}
          variants={slideDown}
          initial="initial"
          animate="animate"
        >
          {tagline && <span css={taglineStyles}>{tagline}</span>}
          {title && <h2 css={headerTitle}>{title}</h2>}
          {lead && <p css={headerLead}>{lead}</p>}
        </motion.header>
      )}

      {children}
    </MotionComp>
  );
};

export default Section;
