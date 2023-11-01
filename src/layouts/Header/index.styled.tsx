import styled from "@emotion/styled";
import { ptr } from "../../utils/helpers";

export const HeaderContainer = styled("div")({
  justifyContent: "space-between",
  alignItems: "center",
  paddingLeft: ptr(100),
  paddingRight: ptr(100),
  display: "flex",
  gap: ptr(50),
});

export const ShopContainer = styled("div")({
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  width: "50%",
});

export const BrandsContainer = styled("div")({
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  width: "100%",
});

export const LogoContainer = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "50%",
});

export const SearchContainer = styled("div")({
  display: "flex",
  justifyContent: "start",
  alignItems: "center",
  width: "100%",
});

export const AccountContainer = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "25%",
});
