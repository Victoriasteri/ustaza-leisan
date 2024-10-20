import { Box, Stack } from "@mui/material";
import React from "react";
import OutlinedCard, { MonospaceTypograpy } from "../shared-utils";

const IndexPage = () => {
  return (
    <Stack alignItems="center" py={3}>
      <MonospaceTypograpy label="بِسۡمِ ٱللَّهِ ٱلرَّحۡمَـٰنِ ٱلرَّحِيمِ" />
      <MonospaceTypograpy label="Добро пожаловать на мой сайт!" />
      <Box display="flex" flexWrap="wrap" gap={3} mt={3}>
        <OutlinedCard />
        <OutlinedCard />
        <OutlinedCard />
        <OutlinedCard />
        <OutlinedCard />
        <OutlinedCard />
        <OutlinedCard />
        <OutlinedCard />
        <OutlinedCard />
        <OutlinedCard />
        <OutlinedCard />
      </Box>
    </Stack>
  );
};

export default IndexPage;
