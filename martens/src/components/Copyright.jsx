import { Typography, Link, Box } from "@mui/material";
import React from "react";

export default function Copyright(props) {
  return (
    <Box sx={{ marginY: ".5rem" }}>
      <Typography
        variant="body1"
        color="text.secondary"
        align="center"
        {...props}
      >
        {"Copyright © . Martens todo en aberturas. Hecho por "}
        <Link
          color="inherit"
          href="https://www.linkedin.com/in/lis-medina/"
          target="_blank"
        >
          Lis Medina{" "}
        </Link>
        <Link
          color="inherit"
          href="https://www.linkedin.com/in/santiago-pereira-994229244//"
          target="_blank"
        >
          y Santiago Pereira
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </Box>
  );
}
