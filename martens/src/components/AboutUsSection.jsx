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
               "https://res.cloudinary.com/dmatgvjjy/image/upload/v1684961432/martens/dylan-gillis-KdeqA3aTnBY-unsplash_1_omd5vp_1_sjce74.jpg"             }
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
              hierro de caño para jardín y se dedicaron a la herrería de pesada
              de hierro, siguiendo las tendencias de aquellos tiempos. Con el
              tiempo, surgió la idea de mejorar la producción. Logramos adquirir
              una máquina plegadora, lo que nos permitió establecer nuestra
              fábrica de aberturas. Siempre nos esforzamos por ofrecer modelos
              únicos y de alta calidad, diferenciándonos de los estándares
              comunes. La gente nos ha reconocido a lo largo de los años, aunque
              no hemos hecho mucho énfasis en la publicidad. Nuestro mayor éxito
              ha sido el boca a boca, con clientes satisfechos que nos
              recomiendan a sus amigos, familiares e incluso a las generaciones
              futuras.
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
              Siempre nos hemos adaptado y reinventado para cumplir con las
              demandas cambiantes de los tiempos actuales. Nuestro compromiso
              con la calidad y la satisfacción del cliente nos ha mantenido en
              la mente y los corazones de las personas. Estamos orgullosos de
              haber construido relaciones sólidas con nuestros clientes a lo
              largo de los años. Estamos agradecidos por su apoyo continuo y
              seguiremos esforzándonos para satisfacer las necesidades del
              presente y del futuro.
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
