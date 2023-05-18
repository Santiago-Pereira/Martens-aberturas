import { Box, Container } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

export default function Map() {
  return (
    <Box
      sx={{
        width: "100%",
        paddingY: "2rem",
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
              src="https://maps.google.com/maps?width=&amp;height=&amp;hl=en&amp;q=tandil%2C%20Primera%20Junta%20967+(T%C3%ADtulo)&amp;ie=UTF8&amp;t=&amp;z=17&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </Grid2>
        </Grid2>
      </section>
    </Box>
  );
}
