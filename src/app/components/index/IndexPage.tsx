"use client";
import React from "react";
import { MonospaceTypograpy } from "../shared-utils";
import { Stack, useMediaQuery, useTheme } from "@mui/material";
import Woman from "../../public/flower.svg";
import Image from "next/image";

const IndexPage = () => {
  //const WP_API_URL = "https://ustaza-leisan.com/wp-json/wp/v2";

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Stack alignItems="center" p={2} spacing={2}>
      <MonospaceTypograpy label="بِسۡمِ ٱللَّهِ ٱلرَّحۡمَـٰنِ ٱلرَّحِيمِ" />
      <MonospaceTypograpy
        label="Добро пожаловать на мой сайт!"
        fontSize={isMobile ? "20px" : undefined}
      />
      <MonospaceTypograpy
        label="Меня зовут Лейсан, и я научу вас понимать Коран"
        fontSize="1rem"
      />
      <Image src={Woman.src} alt="woman in hijab" width={200} height={200} />
    </Stack>
  );
};

export default IndexPage;
