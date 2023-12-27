const color = (fg: string, bg: string) => ({
  fg,
  bg,
});

export const tagToColor = {
  "Clean Architecture": color("white", "#175196CC"),
  "Node.js": color("white", "#3C873ACC"),
  React: color("black", "#61dafb"),
  Jest: color("white", "#15C213CC"),
  Docker: color("white", "#0162CCCC"),
  WebSockets: color("white", "#BC01CCCC"),
  Microsservices: color("white", "#96173DCC"),
  Golang: color("white", "#00ACD7CC"),
  "React Native": color("white", "#3948CCCC"),
  Android: color("black", "#3DDC84CC"),
  Astro: color("white", "#FF5D01CC"),
  MongoDB: color("white", "#3FA037"),
  PostgreSQL: color("white", "#008bb9"),
  Redis: color("white", "#d82c20"),
  i18n: color("white", "#9D1AD5"),
  l10n: color("white", "#CE1D8D"),
  TypeScript: color("white", "#3178c6"),
};
