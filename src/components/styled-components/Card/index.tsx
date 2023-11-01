import React, { useEffect, useState } from "react";
import {
  CardContainer,
  CustomCard,
  CustomCardActions,
  ImgBox,
} from "./index.styled";
import { CardProps } from "./types";
import { Button, CardContent, CardHeader, IconButton } from "@mui/material";
import Typography from "../Typography";
import { AspectRatio } from "@mui/joy";

const Card: React.FunctionComponent<CardProps> = ({
  children,
  details,
  onClick,
}) => {
  const [favoriteProductIds, setFavoriteProductIds] = useState<Number[]>([]);
  const [fav, setFav] = useState(false);

  useEffect(() => {}, [fav]);

  const AddToFavorites = (productId: number) => {
    const newFavoriteProductIds = favoriteProductIds;
    newFavoriteProductIds.push(productId);
    setFavoriteProductIds(newFavoriteProductIds);

    localStorage.setItem("favs", JSON.stringify(newFavoriteProductIds));
  };

  const RemoveFromFavorites = (productId: number) => {
    const newFavoriteProductIds = favoriteProductIds.filter(
      (id) => id !== productId
    );
    setFavoriteProductIds(newFavoriteProductIds);

    localStorage.setItem("favs", JSON.stringify(newFavoriteProductIds));
  };

  const ToggleFavorite = (productId: number) => {
    const favoriteProductIds = JSON.parse(localStorage.getItem("favs")!);

    const isProductFavorited = favoriteProductIds?.includes(productId);

    if (isProductFavorited) {
      RemoveFromFavorites(productId);
      setFav(!fav);
    } else {
      AddToFavorites(productId);
      setFav(!fav);
    }
  };

  return (
    <CardContainer>
      {details?.map((detail, index) => (
        <CustomCard variant="outlined" key={index}>
          <CardHeader
            title={
              <Typography
                isLineClamp
                lineClampRow={1}
                variant="body-small-bold"
              >
                {detail.title}
              </Typography>
            }
          />
          <AspectRatio sx={{}} ratio={2}>
            <ImgBox>
              <img
                style={{ width: "fit-content" }}
                src={detail.image}
                alt={detail.title}
              ></img>
            </ImgBox>
          </AspectRatio>
          <CardContent>
            <Typography isLineClamp lineClampRow={3}>
              {detail.description}
            </Typography>
            {children}
          </CardContent>
          <CustomCardActions disableSpacing>
            <IconButton onClick={() => onClick?.(detail.id)}>
              Detaya Git
            </IconButton>
            <Button onClick={() => ToggleFavorite(detail.id)}>
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20.576"
                height="19.483"
                viewBox="0 0 20.576 19.483"
              >
                <path
                  stroke="#193db0"
                  stroke-width="1.5px"
                  fill={`${
                    localStorage.getItem("favs")?.includes(detail.id.toString())
                      ? "#193db0"
                      : "none"
                  }`}
                  d="M19.032 7.111c-.278-3.063-2.446-5.285-5.159-5.285a5.128 5.128 0 0 0-4.394 2.532 4.942 4.942 0 0 0-4.288-2.532C2.478 1.826.31 4.048.032 7.111a5.449 5.449 0 0 0 .162 2.008 8.614 8.614 0 0 0 2.639 4.4l6.642 6.031 6.755-6.027a8.615 8.615 0 0 0 2.639-4.4 5.461 5.461 0 0 0 .163-2.012z"
                  transform="translate(.756 -1.076)"
                ></path>
              </svg>
            </Button>
          </CustomCardActions>
        </CustomCard>
      ))}
    </CardContainer>
  );
};

export default Card;
