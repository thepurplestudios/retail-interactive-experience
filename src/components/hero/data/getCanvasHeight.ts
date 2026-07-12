export function getCanvasHeight(
  cards: Record<
    string,
    {
      y: number;
      height: number;
    }
  >,
  bottomPadding = 40,
) {
  return (
    Math.max(...Object.values(cards).map((card) => card.y + card.height)) +
    bottomPadding
  );
}
