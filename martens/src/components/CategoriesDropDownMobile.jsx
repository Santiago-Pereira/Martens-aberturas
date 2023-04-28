import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import { Box } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

/* products and services array */
const categoriesArray = [
  { name: "Puertas" },
  { name: "Portones" },
  { name: "Ventanas" },
  { name: "Trabajos en hierro" },
  { name: "Pérgolas" },
  { name: "Soluciones generales" },
];

export default function CategoriesDropDownMobile({ hideMenu }) {
  //dropdown on menu functions
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClose = () => {
    setAnchorEl(null);
    hideMenu();
  };

  /* categories rendering */
  function categoryRendering(cats) {
    return cats?.map((category) => (
      <MenuItem onClick={handleClose} key={category.name}>
        {category.name}
      </MenuItem>
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
          },color:'red'
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
            <Typography>Catergorias</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div onClick={hideMenu}>{categoryRendering(categoriesArray)}</div>
          </AccordionDetails>
        </Accordion>
      </Box>
    </>
  );
}
