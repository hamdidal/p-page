import { styled, TextField } from "@mui/material";

export const CustomSearchInput = styled(TextField)(() => ({
  borderColor: "black",
  "& > div": {
    fontWeight: "400",
    paddingRight: "12px",
    fontSize: "18px",
    color: "black",
  },
  "& .MuiOutlinedInput-root": {
    "&:hover fieldset": {
      borderColor: "black",
    },
    "&.Mui-focused fieldset": {
      borderColor: "black",
    },
  },
}));
