import { styled } from "@mui/material";
import "@fontsource/roboto/100.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto/900.css";
interface Props {
  weight: number;
  color: string;
  size: number | string;
  width: string | number;
  isLineClamp?: boolean;
  lineClampRow?: number;
}
export const CustomTypography = styled("div")((props: Props) => {
  let clampSettings = {
    overflow: "hidden",
    "-webkit-box-orient": "vertical",
    "-webkit-line-clamp": String(props.lineClampRow) ?? String(3),
    display: "-webkit-box",
  };
  let clampCss = props.isLineClamp
    ? clampSettings
    : { display: "inline-block" };

  return {
    fontWeight: props.weight,
    color: props.color,
    fontSize: props.size,
    minWidth: props.width,
    letterSpacing: "0.03em",
    fontFamily: "'Roboto', sans-serif",
    ...clampCss,
  };
});
