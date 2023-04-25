import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import { Box, Button } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function CategoriasDropDown({ hideMenu }) {
  //dropdown on menu functions
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    /*  hideMenu(); */
  };
  return (
    <>
      {/* dropdown for desktop */}
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{ color: "#fff" }}
      >
        Categorías
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>Puertas</MenuItem>
        <MenuItem onClick={handleClose}>Portones</MenuItem>
        <MenuItem onClick={handleClose}>Ventanas</MenuItem>
        <MenuItem onClick={handleClose}>Trabajos en hierro</MenuItem>
        <MenuItem onClick={handleClose}>Pérgolas</MenuItem>
        <MenuItem onClick={handleClose}>Soluciones generales</MenuItem>
      </Menu>
      {/*accordion for mobile*/}
      <Box
        sx={{
          display: { xs: "block", sm: "none", md: "none" },
        }}
      >
        <Accordion
          sx={{
            border: "none",
            boxShadow: "none",
            flexDirection: "column",
            padding,
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
            <Typography onClick={hideMenu}>Lorem ipsum</Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </>
  );
}
