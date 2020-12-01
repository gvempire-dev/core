export const slideDown = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export const slideUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export const fadeWithChildren = {
  initial: {
    opacity: 0,
    transition: {
      when: 'afterChildren',
    },
  },
  animate: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      delayChildren: 0.7,
      staggerChildren: 0.7,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      when: 'afterChildren',
    },
  },
};
