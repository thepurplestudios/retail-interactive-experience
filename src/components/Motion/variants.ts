import { CARD_REVEAL } from "./transitions";

export const cardReveal = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,

    transition: CARD_REVEAL,
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
