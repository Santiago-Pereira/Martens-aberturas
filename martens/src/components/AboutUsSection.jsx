import { Box, Container, Grid, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";

export default function AboutUsSection() {
  return (
    <Container>
      <Box sx={{ paddingY: "2rem" }}>
        <Grid2 container spacing={9}>
          <Grid2
            xs={12}
            md={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
            id="aboutUs"
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
          >
            <img
              src={
                "https://res.cloudinary.com/dmatgvjjy/image/upload/v1684961432/martens/dylan-gillis-KdeqA3aTnBY-unsplash_1_omd5vp_1_sjce74.jpg"
              }
              alt="martens-historia"
              loading="lazy"
            />
          </Grid2>
          <Grid2
            xs={12}
            md={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
            id="aboutUs"
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
          >
            <Typography
              component="h1"
              variant="h3"
              color="initial"
              sx={{ paddingBottom: "1rem" }}
            >
              {" "}
              Nuestra historia
            </Typography>
            <Typography
              variant="body1"
              color="initial"
              sx={{
                paddingBottom: { xs: "2rem", md: "0rem" },
                textAlign: "justify",
              }}
            >
              En 1957, un grupo de trabajadores entusiastas, liderados por
              Carlos Martens, comenzaron a perseguir sus sueños de fabricar algo
              especial. Comenzaron con la creación de juegos de sillones de
              hierro de caño para jardín y se dedicaron a la herrería pesada de
              hierro, siguiendo las tendencias de aquellos tiempos. Con los años
              surgió la idea de mejorar la producción y poder enfocarnos en
              trabajos más detallistas. Logramos adquirir una máquina plegadora,
              y fue en ese momento que se sumó Héctor Martens, lo que nos
              permitió establecer nuestra fábrica de aberturas. Siempre nos
              hemos esforzado por ofrecer modelos únicos y de alta calidad,
              diferenciándonos de los estándares comunes. Además, hemos brindado
              soluciones y reparaciones a los vecinos de la ciudad y el campo,
              lo que nos llevó a trabajar en toda la provincia de BsAs.
            </Typography>
          </Grid2>
        </Grid2>

        <Grid2 container spacing={5}>
          <Grid2
            xs={12}
            md={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
            id="aboutUs"
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
          >
            <Typography
              component="h3"
              variant="h3"
              color="initial"
              sx={{
                paddingTop: { xs: "2rem", md: "0rem" },
                paddingBottom: "1rem",
              }}
            >
              Nuestros valores
            </Typography>
            <Typography
              variant="body"
              color="initial"
              sx={{ textAlign: "justify" }}
            >
              A lo largo de los años, la gente nos ha reconocido, aunque no
              hemos hecho mucho énfasis en la publicidad. Nuestro mayor éxito ha
              sido el boca a boca, con clientes satisfechos que nos recomiendan
              a sus amigos, familiares e incluso a las generaciones futuras.
              Después de más de 60 años en el rubro, seguimos siendo una PYME de
              Tandil, dedicada a la fabricación y colocación de todo tipo de
              aberturas. Nos mantenemos avanzando y adaptándonos a los nuevos
              diseños y diferentes prestaciones que brindan los materiales de
              esta época.
            </Typography>
          </Grid2>

          <Grid2
            xs={12}
            md={6}
            sx={{
              padding: "2rem",
              display: "flex",
              justifyContent: "center",
            }}
            id="aboutUs"
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
          >
            <img
              src={
                "https://res.cloudinary.com/dmatgvjjy/image/upload/v1684960628/martens/WhatsApp_Image_2023-05-24_at_5.29.14_PM_1_gc3mbt.jpg"
              }
              alt="martens-historia"
              loading="lazy"
            />
          </Grid2>
        </Grid2>
      </Box>
    </Container>
  );
}
