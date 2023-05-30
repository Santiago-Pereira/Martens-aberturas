import { Box, Container } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

export default function Map() {
  return (
    <Box
      sx={{
        width: "100%",
        paddingTop: "2rem",
        border: "none",
        borderRadius: "3px",
      }}
    >
      <section
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-once="true"
      >
        <Grid2 sx={{ display: { xs: "none", sm: "block" } }}>
          <Grid2>
            <iframe
              style={{
                width: "100%",
                height: "50vh",
              }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3173.2176473582085!2d-59.11906582420625!3d-37.313671872105104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95911ff08fcab9bf%3A0x20d9db738c01cb7f!2sPrimera%20Junta%20%26%20Avenida%20Espora%2C%20B7001%20Tandil%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1685481296070!5m2!1ses-419!2sar"
            ></iframe>
          </Grid2>
        </Grid2>
      </section>
    </Box>
  );
}
