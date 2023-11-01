import React from "react";

import { CustomTypography } from "./index.styled";
import { TypographyProps } from "./types";
import { sizes, weights } from "./constants";

const Typography: React.FunctionComponent<TypographyProps> = ({
  disabled,
  onClick,
  size,
  weight,
  children,
  color = "black",
  width = "fit-content",
  text,
  variant,
  isLineClamp,
  lineClampRow,
  pointer = false,
}) => {
  let calculatedSize = size ?? sizes.normal;
  let calculatedWeight = weight ?? weights.default;

  const variants = variant?.split("-") || "";
  if (variants.length === 3) {
    calculatedSize = sizes[variants[1]];
    calculatedWeight = weights[variants[2]];
  } else if (variants.length === 2) {
    calculatedSize = sizes[variants[0]];
    calculatedWeight = weights[variants[1]];
  }

  if (size) {
    calculatedSize = size;
  }

  return (
    <CustomTypography
      sx={{ cursor: onClick || pointer ? "pointer" : "default" }}
      onClick={onClick}
      size={calculatedSize}
      weight={calculatedWeight}
      color={color}
      width={width}
      isLineClamp={isLineClamp}
      lineClampRow={lineClampRow}
    >
      {text || children}
    </CustomTypography>
  );
};

export default Typography;
