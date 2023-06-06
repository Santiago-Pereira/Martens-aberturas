"use client";
import { Box } from "@mui/material";

export default function Banner() {
  return (
    <section
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-once="true"
    >
      <Box className="banner"></Box>
    </section>
  );
}
