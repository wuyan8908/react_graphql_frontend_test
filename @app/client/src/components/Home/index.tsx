import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import { SideBar } from "../SideBar";
import { Content } from "../Content";

export function Home() {
  return (
    <Grid h='100vh' templateColumns='repeat(10, 1fr)' gap={4}>
      <GridItem colSpan={2}>
        <SideBar />
      </GridItem>
      <GridItem colStart={3} colEnd={11}>
        <Content />
      </GridItem>
    </Grid>
  );
}
