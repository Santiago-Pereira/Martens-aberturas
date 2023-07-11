"use client";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import { Box } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import categoriesData from "@/app/categoriesData";

export default function CategoriesDropDownMobile({ hideMenu }) {
  //dropdown on menu functions
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClose = () => {
    setAnchorEl(null);
    hideMenu();
  };

  /* categories rendering */
  function categoryRendering() {
    return categoriesData?.map((element) => (
      <a href={`/${element.code}`} key={element.id}>
        <MenuItem onClick={handleClose}>{element.title}</MenuItem>
      </a>
    ));
  }
  return (
    <>
      {/*accordion for mobile*/}
      <Box
        sx={{
          display: {
            xs: "block",
            sm: "none",
            md: "none",
          },
          color: "black",
        }}
      >
        <Accordion
          sx={{
            border: "none",
            boxShadow: "none",
            flexDirection: "column",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Categorías</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div onClick={hideMenu}>{categoryRendering()}</div>
          </AccordionDetails>
        </Accordion>
      </Box>
    </>
  );
}
