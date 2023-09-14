import type {
  ClassListVariantType,
  ElementByTypographyVariant,
  FontStyleProps,
  TypographyVariants,
} from "./types";

const elementByTypographyVariant: ElementByTypographyVariant = {
  "h1-sans": "h1",
  "h1-serif": "h1",
  "h2-sans": "h2",
  body: "p",
  button: "p",
  small: "p"
};

export const getElementByTypographyVariant = (variant: TypographyVariants) =>
  elementByTypographyVariant[variant];

const removeUndefinedFieldsFromObject = (obj: any) =>
  Object.keys(obj).forEach((key) =>
    // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
    obj[key] === undefined ? delete obj[key] : {}
  );

const cssPropertiesToInlineCss = (obj: any) =>
  Object.keys(obj)
    .map((k) => `${k}: ${obj[k]};`)
    .join("");

export const getCssPropertiesByStyleProps = (styleProps: FontStyleProps) => {
  const cssProperties = {
    "font-family": styleProps.fontFamily,
    "font-size": styleProps.fontSize ? `${styleProps.fontSize}px` : undefined,
    "font-weight": styleProps.fontWeight,
    "letter-spacing": styleProps.letterSpacing,
    "text-align": styleProps.textAlign ?? "left",
    color: styleProps.color,
  };

  removeUndefinedFieldsFromObject(cssProperties);
  const inlineCss = cssPropertiesToInlineCss(cssProperties);

  return inlineCss;
};

export const getClassListByVariant = (
  variant: TypographyVariants
): ClassListVariantType => [
  {
    "h1-sans": variant === "h1-sans",
    "h1-serif": variant === "h1-serif",
    "h2-sans": variant === "h2-sans",
    body: variant === "body",
    button: variant === "button",
    small: variant === "small"
  },
];
