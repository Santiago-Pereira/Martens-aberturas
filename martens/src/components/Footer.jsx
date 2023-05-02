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
    <Box
      sx={{
        backgroundColor: "fff",
        padding: "2.5rem",
        textAlign: { md: "center", sm: "start", xs: "start" },
      }}
    >
      <Container>
        <Grid2 container spacing={2}>
          <Grid2  md={4} sm={12}>
            <img
              src={
                "https://res.cloudinary.com/dmatgvjjy/image/upload/v1682619752/martens/martens_pkx8qa.png"
              }
              alt="Logo"
              style={{
                height: "50px",
              }}
            />
          </Grid2>

           <Grid2
            md={4}
            sm={12}
            sx={{ padding: { xs: "1.5rem 0rem", md: "0 1.3rem" }, textAlign: "start" }}
            
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
            <Typography sx={{ fontSize: "1rem" }}>Domingo: Cerrado</Typography>
          </Grid2>

          <Grid2  md={4} sm={12} sx={{display:"flex",flexDirection:"column",padding:"0"}}>
            <a href="mailto:martensaberturas@gmail.com" target="_blank" className="anchor-footer">
              <IconButton sx={{padding:"0.5rem 0px"}}>
                <EmailIcon sx={{ fontSize: "2rem" }}></EmailIcon>
              </IconButton>
              <Typography>martensaberturas@gmail.com</Typography>
            </a>

            <a href="tel:+5491155911291" target="_blank" className="anchor-footer">
              <IconButton sx={{padding:"0.5rem 0px"}}>
                <PhoneAndroidIcon sx={{ fontSize: "2rem" }}></PhoneAndroidIcon>
              </IconButton>
              <Typography>2494-588210</Typography>
            </a>
          </Grid2>

          <Grid2  md={12} sm={12} sx={{display:{md:"flex" ,xs:"none"}, justifyContent:{md:"center"}}}>

          <a href="https://www.facebook.com/martenstodoenaberturas.martens" target="_blank" className="anchor-footer">
            <IconButton>
              <FacebookIcon sx={{ fontSize: "2rem" }} />
            </IconButton>
            </a>

            <a href="https://www.instagram.com/martensaberturas/" target="_blank" className="anchor-footer">
            <IconButton>
              <InstagramIcon sx={{ fontSize: "2rem" }} />
              </IconButton>
            </a>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
}

export default Footer;
