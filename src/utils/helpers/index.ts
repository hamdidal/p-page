export const ptr = (px: number) => {
  const baseSize = 16;
  return `${(1 / baseSize) * px}rem`;
};
