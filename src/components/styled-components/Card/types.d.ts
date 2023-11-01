import React from "react";

export type CardProps = {
  details?: CardDetailProps[];
  onClick?: (id) => void;
  expanded?: boolean;
  children?: React.ReactNode;
};

export type CardDetailProps = {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
  title: string;
};

export type ActionButtons = [
  {
    leftIconButton?: string | React.ReactNode;
  },
  {
    middleIconButton?: string | React.ReactNode;
  },
  {
    rightIconButton?: string | React.ReactNode;
  }
];
