import {
  Card,
  CardHeader,
  CardActions,
  CardContent,
  styled,
} from "@mui/material";

export const CustomCard = styled(Card)((props) => ({
  width: "20%",
  fontSize: "14px",
  "& .MuiTypography-root.MuiTypography-body1.MuiTypography-root": {
    fontSize: "14px",
  },
}));
export const CustomCardHeader = styled(CardHeader)((props) => ({
  fontSize: "14px",
}));
export const CustomCardActions = styled(CardActions)((props) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  "& .MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium.MuiButtonBase-root.MuiIconButton-root":
    {
      fontSize: "14px",
    },
}));

export const CustomCardContent = styled(CardContent)((props) => ({
  fontSize: "14px",
}));

export const CardContainer = styled("div")({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
  margin: "0 -15px",
  gap: "30px",
});

export const ImgBox = styled("div")({
  background: "white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
