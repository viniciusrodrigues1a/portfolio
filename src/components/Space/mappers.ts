import type { SpaceProps } from "./types";

const removeUndefinedFieldsFromObject = (obj: any) =>
  Object.keys(obj).forEach((key) =>
    // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
    obj[key] === undefined ? delete obj[key] : {}
  );

const cssPropertiesToInlineCss = (obj: any) =>
  Object.keys(obj)
    .map((k) => `${k}: ${obj[k]};`)
    .join("");

export const getCssPropertiesByStyleProps = (styleProps: SpaceProps) => {
  const isSizeNum = typeof styleProps.size === "number";
  const sizeStyle = isSizeNum ? `${styleProps.size}px` : styleProps.size;

  const cssProperties = {
    width: sizeStyle,
    height: styleProps.direction === "horizontal" ? "1px" : sizeStyle,
    display: styleProps.direction === "vertical" ? "block" : "inline-block",
  };

  removeUndefinedFieldsFromObject(cssProperties);
  const inlineCss = cssPropertiesToInlineCss(cssProperties);

  return inlineCss;
};
