export const TABLET_LAYOUT = {
  container: {
    maxWidth: 940,
    paddingX: 32,
    gap: 24,
  },

  columns: {
    left: "42%",
    right: "58%",
  },

  cards: {
    editorial: {
      height: 620,
    },

    story: {
      height: 290,
    },

    bracelet: {
      height: 300,
    },

    rings: {
      height: 170,
    },

    promise: {
      height: 170,
    },

    video: {
      height: 420,
    },

    mens: {
      height: 220,
    },
  },
} as const;
