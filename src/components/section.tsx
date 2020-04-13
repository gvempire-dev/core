import * as React from 'react';
import { motion } from 'framer-motion';

import {
  tagline as taglineStyles,
  section,
  headerTitle,
  headerLead,
  sectionHeader,
} from '../common/styles';
import { fadeWithChildren, slideDown } from '../common/animations';

const Section: React.FC<{
  tagline?: string | React.ReactNode;
  title?: string | React.ReactNode;
  lead?: string | React.ReactNode;
  alternate?: boolean;
  children?: React.ReactNode;
}> = ({ tagline, title, lead, alternate, children }) => (
  <motion.section
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
  </motion.section>
);

export default Section;
