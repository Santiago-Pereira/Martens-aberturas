import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid2 from "@mui/material/Unstable_Grid2"; // Grid version 2
import Typography from "@mui/material/Typography";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import EmailIcon from "@mui/icons-material/Email";
import { useTheme } from "@emotion/react";
import IconButton from "@mui/material/IconButton";
function Footer() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        backgroundColor: "grey",
        padding: "2.5rem",
        textAlign: { md: "center", sm: "start", xs: "start" },
      }}
    >
      <Container>
        <Grid2 container spacing={2}>
          <Grid2 item md={4} sm={12}>
            <img
              src={
                "https://res.cloudinary.com/dmatgvjjy/image/upload/v1682619752/martens/martens_pkx8qa.png"
              }
              alt="Logo"
              style={{
                height: "60px",
              }}
            />
          </Grid2>

          <Grid2
            md={4}
            sm={12}
            sx={{ padding: { xs: "1.5rem 0rem", md: "0" }, textAlign: "start" }}
          >
            <Typography sx={{ fontSize: "1.7rem" }}>
              Horarios de atención
            </Typography>
            <Typography sx={{ fontSize: "1rem" }}>
              Lunes a Viernes 09:00-21:00hs
            </Typography>

            <Typography sx={{ fontSize: "1rem" }}>
              Sábado: 09:00-13:00hs
            </Typography>
            <Typography sx={{ fontSize: "1rem" }}>Domingo: Cerrado</Typography>
          </Grid2>
          <Grid2 item md={4} sm={12} sx={{}}>
            <a href="" target="_blank">
              <IconButton>
                <EmailIcon sx={{ fontSize: "2rem" }}></EmailIcon>
              </IconButton>
              <Typography>manuelmartens@hotmail.com</Typography>
            </a>

            <a href="" target="_blank">
              <IconButton>
                <PhoneAndroidIcon sx={{ fontSize: "2rem" }}></PhoneAndroidIcon>
              </IconButton>
              <Typography>+549115591-1291</Typography>
            </a>

            <a href="" target="_blank">
              <FacebookIcon sx={{ fontSize: "2rem" }} />
            </a>

            <a href="" target="_blank">
              <InstagramIcon sx={{ fontSize: "2rem" }} />
            </a>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
}

export default Footer;
