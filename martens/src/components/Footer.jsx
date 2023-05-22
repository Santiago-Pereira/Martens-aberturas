import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid2 from "@mui/material/Unstable_Grid2"; // Grid version 2
import Typography from "@mui/material/Typography";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import EmailIcon from "@mui/icons-material/Email";
import IconButton from "@mui/material/IconButton";

function Footer() {
  return (
    <Box sx={{ borderTop: "1px dotted grey" }}>
      <Container>
        <Box
          sx={{
            backgroundColor: "white",
            paddingY: "2rem",
          }}
        >
          <Grid2 container spacing={5}>
            <Grid2
              md={4}
              sm={12}
              sx={{
                display: { md: "flex" },
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                src={
                  "https://res.cloudinary.com/dmatgvjjy/image/upload/v1682619752/martens/martens_pkx8qa.png"
                }
                alt="Logo"
                loading="lazy"
                width={"200px"}
              />
              <Grid2
                md={12}
                sm={12}
                sx={{
                  display: { md: "flex", xs: "none" },
                  justifyContent: { md: "center" },
                }}
              >
                <a
                  href="https://www.facebook.com/martenstodoenaberturas.martens"
                  target="_blank"
                  className="anchor-footer"
                >
                  <IconButton>
                    <FacebookIcon
                      sx={{ fontSize: "1.5rem", color: "#2e3359" }}
                    />
                  </IconButton>
                </a>

                <a
                  href="https://www.instagram.com/martensaberturas/"
                  target="_blank"
                  className="anchor-footer"
                >
                  <IconButton>
                    <InstagramIcon
                      sx={{ fontSize: "1.5rem", color: "#2e3359" }}
                    />
                  </IconButton>
                </a>
              </Grid2>
            </Grid2>

            <Grid2
              md={4}
              sm={12}
              sx={{
                display: "flex",
                flexDirection: "column",
                padding: "0.5rem",
                alignItems: "start",
              }}
            >
              <a
                href="mailto:martensaberturas@gmail.com"
                target="_blank"
                className="anchor-footer"
              >
                <IconButton>
                  <EmailIcon sx={{ fontSize: "2rem" }}></EmailIcon>
                  <Typography>martensaberturas@gmail.com</Typography>
                </IconButton>
              </a>

              <a
                href="tel:+5491155911291"
                target="_blank"
                className="anchor-footer"
              >
                <IconButton>
                  <PhoneAndroidIcon
                    sx={{ fontSize: "2rem" }}
                  ></PhoneAndroidIcon>
                  <Typography>Telefono: 2494-588210 </Typography>
                </IconButton>
              </a>
            </Grid2>

            <Grid2
              md={4}
              sm={12}
              sx={{
                padding: { md: "0 1.3rem" },
                textAlign: "start",
              }}
            >
              <Typography sx={{ fontSize: "1.7rem" }}>
                Horarios de atención
              </Typography>
              <Typography sx={{ fontSize: "1rem" }}>
                Lunes a Viernes 08:00-16:00hs
              </Typography>

              <Typography sx={{ fontSize: "1rem" }}>
                Sábado: 08:30-12:30hs
              </Typography>
              <Typography sx={{ fontSize: "1rem" }}>
                Domingo: Cerrado
              </Typography>
            </Grid2>
          </Grid2>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
