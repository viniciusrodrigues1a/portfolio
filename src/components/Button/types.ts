import type { TypographyProps } from "@components/Typography/types";
import type { svgIconNames } from "src/icons/svgs/_types";

interface ButtonPropsWithTitle {
  title: string;
  children?: never;
}

interface ButtonPropsWithChildren {
  title?: never;
  children: any;
}

interface ButtonPropsWithShowIcon {
  showIcon: boolean;
  iconPosition: "left" | "right";
  iconName: svgIconNames;
  iconSize?: number;
  iconColor?: string;
}

interface ButtonPropsWithoutShowIcon {
  showIcon?: never;
  iconPosition?: never;
  iconName?: never;
  iconSize?: never;
  iconColor?: never;
}

type ButtonPropsTitleOrChildren =
  | ButtonPropsWithTitle
  | ButtonPropsWithChildren;

type ButtonPropsIconProps =
  | ButtonPropsWithShowIcon
  | ButtonPropsWithoutShowIcon;

interface ButtonBaseProps {
  variant?: "contained" | "text";
  color?: string;
  fontSize?: TypographyProps["fontSize"];
  fontFamily?: TypographyProps["fontFamily"];
  fontWeight?: TypographyProps["fontWeight"];
  letterSpacing?: TypographyProps["letterSpacing"];
}

export type ButtonProps = ButtonBaseProps &
  ButtonPropsTitleOrChildren &
  ButtonPropsIconProps;
