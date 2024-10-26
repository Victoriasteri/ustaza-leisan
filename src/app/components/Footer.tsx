import { Stack, Typography } from "@mui/material";
import React from "react";
import Link from "next/link";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <Stack
      justifyContent="center"
      py={3}
      spacing={3}
      sx={{
        backgroundColor: "#FFE3E3",
        flexShrink: 0,
      }}
    >
      <Stack direction="row" justifyContent="center" spacing={2}>
        <Link href="/about">Обо мне</Link>
        <Link href="/products">Товары</Link>
        <Link href="/contacts">Контакты</Link>
      </Stack>
      <Stack direction="row" justifyContent="center" spacing={3}>
        <TelegramIcon color="primary" />
        <WhatsAppIcon color="primary" />
        <EmailIcon color="primary" />
      </Stack>
      <Typography variant="body2" align="center">
        &copy; {new Date().getFullYear()} Лейсан Умм Ильсен
      </Typography>
    </Stack>
  );
};

export default Footer;
