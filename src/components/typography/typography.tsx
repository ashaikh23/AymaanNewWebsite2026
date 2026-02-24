import {
  Fragment,
  cloneElement,
  isValidElement,
  type ElementType,
  type HTMLAttributes,
  type ReactElement,
  type ReactNode,
} from "react";
import type {
  TypographyColor,
  TypographyColorMapping,
  TypographyDisplay,
  TypographyDisplayMapping,
  TypographyFontWeight,
  TypographyFontWeightMapping,
  TypographyVariant,
  TypographyVariantMapping,
} from "@/components/typography";
import { cn } from "@/utils/helpers";

export type TypographyProps = {
  children: ReactNode;
  color?: TypographyColor;
  variant?: TypographyVariant;
  display?: TypographyDisplay;
  fontWeight?: TypographyFontWeight;
  className?: string;
} & Omit<HTMLAttributes<HTMLElement>, "className">;

const typographyVariantMapping: TypographyVariantMapping = {
  h1: "h1",
  h2: "h2",
  subtitle1: "h2",
  subtitle2: "h4",
  body1: "p",
  body2: "p",
  overline: "span",
  caption: "small",
  small: "small",
};

const typographyVariantClassNames: TypographyVariantMapping = {
  h1: "text-3xl leading-12",
  h2: "text-2xl leading-8 italic font-serif",
  subtitle1: "text-base leading-6 italic font-serif",
  subtitle2: "text-base leading-6",
  body1: "text-base leading-6",
  body2: "text-sm leading-5",
  overline: "text-sm leading-5 italic font-serif",
  caption: "text-xs leading-4 italic font-serif",
  small: "text-xs leading-4",
};

const typographyFontWeightClassNames: TypographyFontWeightMapping = {
  normal: "font-normal",
  medium: "font-medium",
  bold: "font-bold",
};

const typographyColorClassNames: TypographyColorMapping = {
  default: "text-gray-600",
  muted: "text-gray-500",
  accent: "text-blue-500",
  inherit: "text-inherit",
};

const typographyDisplayClassNames: TypographyDisplayMapping = {
  inline: "inline",
  "inline-block": "inline-block",
  block: "block",
};

function wrapWordsInSpans(node: ReactNode, keyPrefix = ""): ReactNode {
  if (node == null || typeof node === "boolean") {
    return node;
  }
  if (typeof node === "string") {
    return node.split(/(\s+)/).map((part, i) =>
      /\s/.test(part) ? (
        part
      ) : (
        <span key={`${keyPrefix}-${i}`} className="word-hover-scale">
          {part}
        </span>
      )
    );
  }
  if (Array.isArray(node)) {
    return node.map((child, i) => (
      <Fragment key={`${keyPrefix}-${i}`}>
        {wrapWordsInSpans(child, `${keyPrefix}-${i}`)}
      </Fragment>
    ));
  }
  if (isValidElement(node)) {
    const el = node as ReactElement<{ children?: ReactNode }>;
    if (el.props.children != null) {
      return cloneElement(el, {
        ...el.props,
        children: wrapWordsInSpans(el.props.children, keyPrefix),
      });
    }
    return node;
  }
  return node;
}

const Typography = ({
  variant = "body1",
  fontWeight = "normal",
  color = "default",
  display = "inline-block",
  children,
  ...rest
}: TypographyProps) => {
  const Component = typographyVariantMapping[variant] as ElementType;

  const content = wrapWordsInSpans(children);

  const { children: _restChildren, ...restProps } =
    rest as HTMLAttributes<HTMLElement> & {
      children?: ReactNode;
    };
  return (
    <Component
      className={cn(
        typographyVariantClassNames[variant],
        typographyFontWeightClassNames[fontWeight],
        typographyColorClassNames[color],
        typographyDisplayClassNames[display]
      )}
      {...restProps}
    >
      {content}
    </Component>
  );
};

export default Typography;
