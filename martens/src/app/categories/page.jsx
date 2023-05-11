"use client";
import { Container, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2.js";

export default function page() {
  return (
    <>
      <Container sx={{ backgroundColor: "grey", paddingTop: "64px" }}>
        <Grid2 container rowSpacing={3} spacing={3}>
          <Typography component="h1" variant="h3" align="center">
            Puertas
          </Typography>

          <Typography variant="h6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptatibus maxime quidem eum non culpa iusto, laborum fuga sequi,
            quos amet mollitia aliquam et assumenda quaerat perspiciatis atque
            tempora exercitationem rerum?
          </Typography>
        </Grid2>
      </Container>
    </>
  );
}
