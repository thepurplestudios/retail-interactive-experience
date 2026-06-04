import { ROW_REVEAL } from "./transitions";

export const rowReveal = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,

    transition: ROW_REVEAL,
  },
};

export const heroReveal = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

export const imageCardHover = {};
export const textCardHover = {};
