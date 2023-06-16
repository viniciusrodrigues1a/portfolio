export type TypographyVariants =
  | "h1-sans"
  | "h2-sans"
  | "button"
  | "body"
  | "h1-serif";

export type FontStyleProps = Partial<{
  fontSize: number;
  fontWeight: string | number;
  fontFamily: string;
  color: string;
  letterSpacing: number;
  textAlign: "left" | "center" | "right" | "justify";
}>;

type TypographyStyleProps = FontStyleProps & {
  variant?: TypographyVariants;
  class?: string;
};

export type TypographyProps = TypographyStyleProps;

export type ElementByTypographyVariant = {
  [key in TypographyVariants]: string;
};

export type ClassListVariantType = Array<{
  [key in TypographyVariants]: boolean;
}>;
