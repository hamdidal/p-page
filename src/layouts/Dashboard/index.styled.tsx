import styled from "@emotion/styled";
import { ptr } from "../../utils/helpers";

export const DashboardContainer = styled("div")({
  fontFamily: "Inter",
  display: "flex",
});
export const DashboardMain = styled("div")({
  width: "100%",
  gap: ptr(20),
});
export const DashboardContent = styled("div")({
  position: "absolute",
  top: "10%",
  left: "5%",
  right: "5%",
});
