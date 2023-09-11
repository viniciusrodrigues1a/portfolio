const color = (fg: string, bg: string) => ({
  fg,
  bg,
});

export const tagToColor = {
  "Clean Architecture": color("white", "#175196CC"),
  "Node.js": color("white", "#3C873ACC"),
  React: color("black", "#61DBFBCC"),
  Jest: color("black", "#15C213CC"),
  Docker: color("white", "#0162CCCC"),
  WebSockets: color("white", "#BC01CCCC"),
  Microsservices: color("white", "#96173DCC"),
  Golang: color("white", "#00ACD7CC"),
  "React Native": color("white", "#3948CCCC"),
  "Native Android": color("black", "#3DDC84CC"),
  Astro: color("white", "#FF5D01CC"),
};
