import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import { Box, Button } from "@mui/material";
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

export default function CategoriasDropDown({ hideMenu }) {
  //dropdown on menu functions
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    hideMenu;
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
      {/* dropdown for desktop */}
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{ color: "black" }}
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
        {categoryRendering(categoriesArray)}
      </Menu>
    </>
  );
}
