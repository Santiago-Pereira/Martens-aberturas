"use client";
import { Box, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

export default function AbstractSection() {
  return (
    <section
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-once="true"
    >
      <Box sx={{ paddingY: "2rem" }}>
        <Grid2 container spacing={1}>
          <Grid2 xs={12}>
            <Box
              className="servicios"
              sx={{
                color: "whitesmoke",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography variant="h4">
                Somos Fabricantes de aberturas.
              </Typography>
              <Typography variant="h4" sx={{ paddingBottom: "3rem" }}>
                Realizamos trabajos a medida
              </Typography>
              <Typography variant="h6">Cerramientos</Typography>
              <Typography variant="h6">
                Puertas de ingresos automáticas
              </Typography>
              <Typography variant="h6">Soluciones en chapas</Typography>
              <Typography variant="h6">Escaleras</Typography>
              <Typography variant="h6">
                Vidrios - espejos - vidrieras
              </Typography>
              <Typography variant="h6">Escaleras</Typography>
            </Box>
          </Grid2>
        </Grid2>
      </Box>
    </section>
  );
}
