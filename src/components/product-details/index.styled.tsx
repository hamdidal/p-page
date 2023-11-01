import styled from "@emotion/styled";
import { ptr } from "../../utils/helpers";

export const DetailsContainer = styled("div")({
  boxShadow: " 0px 2px 10px rgba(76, 78, 100, 0.22)",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "space-around",
  gap: ptr(16),
  paddingLeft: ptr(100),
  paddingRight: ptr(100),
  padding: ptr(20),
  background: "white",
  width: "100%",
});

export const ImgBox = styled("div")({
  background: "white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "500px",
  width: "100%",
});

export const ProductDetailsContainer = styled("div")({
  display: "flex",
  flexDirection: "row",
  width: "100%",
  padding: ptr(10),
});

export const ImgContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  justifyContent: "center",
  alignContent: "center",
  alignItems: "center",
});

export const BottomImages = styled("div")({
  display: "flex",
  flexDirection: "row",
  width: "100%",
});

export const DetailContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  marginLeft: ptr(100),
  gap: ptr(50),
  justifyContent: "start",
});

export const DetailButton = styled("div")({
  display: "flex",
  flexDirection: "row",
  width: "100%",
  justifyContent: "space-between",
  alignItems: "center",
  gap: ptr(50),
});
