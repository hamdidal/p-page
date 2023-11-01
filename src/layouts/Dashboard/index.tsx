import React from "react";

import {
  DashboardContainer,
  DashboardContent,
  DashboardMain,
} from "./index.styled";
import { DashboardLayoutProps } from "./types";
import Header from "../Header";
import { Divider } from "@mui/material";

const DashboardLayout: React.FunctionComponent<DashboardLayoutProps> = ({
  children,
}) => {
  return (
    <DashboardContainer>
      <DashboardMain>
        <Header />
        <Divider/>
        <DashboardContent>{children}</DashboardContent>
      </DashboardMain>
    </DashboardContainer>
  );
};

export default DashboardLayout;
