import { Button, styled } from "@mui/material";

export const CustomButton = styled(Button)((props) => ({
  borderRadius: "4px",
  fontSize:
    props.size === "large" ? "15px" : props.size === "medium" ? "14px" : "13px",
  height:
    props.size === "large" ? "42px" : props.size === "medium" ? "38px" : "30px",
  width: props.size !== "medium" ? "fit-content" : "104px",
  // width: 'fit-content',
  boxShadow:
    props.variant === "contained"
      ? "0px 4px 8px -4px rgba(76, 78, 100, 0.42)"
      : "none",
  // padding: props.size === 'large' ? '8px 2px' : props.size === 'medium' ? '7px 2px' : '4px 2px',
  padding:
    props.size === "large"
      ? "8px 22px"
      : props.size === "medium"
      ? "7px 2px"
      : "4px 2px",
  fontWeight: 500,
  display: "flex",
  alignItems: "center",
  textAlign: "center",
}));
