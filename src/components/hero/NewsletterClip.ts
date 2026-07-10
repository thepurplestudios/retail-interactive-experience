/**
 * Generates the objectBoundingBox path for the notched "newsletter tab" shape.
 *
 * All inputs are expressed relative to the shape's own box, so the same path
 * works at any size — pass in the box's current pixel width/height (from a
 * ResizeObserver, for example) and the radius/notch dims you want at that size.
 *
 * clipPathUnits="objectBoundingBox" expects every coordinate in the 0–1 range,
 * which is what this function returns.
 */

export interface NewsletterClipConfig {
  /** Current rendered width of the card, in px */
  width: number;
  /** Current rendered height of the card, in px */
  height: number;
  /** Corner radius, in px */
  radius: number;
  /** Width of the top-right notch cutout, in px */
  notchWidth: number;
  /** Height (depth) of the notch cutout, in px */
  notchHeight: number;
}

const BEZIER_K = 0.5523; // circular-arc approximation constant for cubic beziers

export function createNewsletterClip({
  width,
  height,
  radius,
  notchWidth,
  notchHeight,
}: NewsletterClipConfig): string {
  if (width <= 0 || height <= 0) return "";

  // Clamp so the notch/radius can never exceed the box itself at small sizes
  const safeRadius = Math.min(radius, width / 2, height / 2);
  const safeNotchWidth = Math.min(notchWidth, width - safeRadius * 2);
  const safeNotchHeight = Math.min(notchHeight, height - safeRadius * 2);

  const rX = safeRadius / width;
  const rY = safeRadius / height;
  const nX = (width - safeNotchWidth) / width; // notch left edge
  const nY = safeNotchHeight / height; // notch bottom
  const nXr = nX + rX; // notch curve end
  const nY0 = nY - rY; // notch curve start
  const k = BEZIER_K;

  return `
    M ${rX},0
    L ${nX - rX},0
    C ${nX - rX + rX * k},0 ${nX},${rY * (1 - k)} ${nX},${rY}
    L ${nX},${nY0}
    C ${nX},${nY0 + rY * k} ${nXr - rX * k},${nY} ${nXr},${nY}
    L ${1 - rX},${nY}
    C ${1 - rX * (1 - k)},${nY} 1,${nY + rY * k} 1,${nY + rY}
    L 1,${1 - rY}
    C 1,${1 - rY + rY * k} ${1 - rX * (1 - k)},1 ${1 - rX},1
    L ${rX},1
    C ${rX * (1 - k)},1 0,${1 - rY * (1 - k)} 0,${1 - rY}
    L 0,${rY}
    C 0,${rY * (1 - k)} ${rX * (1 - k)},0 ${rX},0
    Z
  `.trim();
}
