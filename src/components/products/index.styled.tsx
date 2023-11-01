import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { ptr } from "../../utils/helpers";

export const FilterSection = styled(Box)({
  boxShadow: " 0px 2px 10px rgba(76, 78, 100, 0.22)",
  marginBottom: ptr(24),
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "space-around",
  height: ptr(90),
  gap: ptr(16),
  padding: ptr(20),
  background: "white",
  marginRight: ptr(100),
  marginLeft: ptr(100),
});

export const FilterGroup = styled(Box)({
  display: "flex",
  gap: ptr(24),
  width: "100%",
  flexDirection: "row",
  justifyContent: "space-between",
  alignContent: "center",
  alignItems: "center",
});
