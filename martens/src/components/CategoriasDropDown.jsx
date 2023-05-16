import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import Button from "@mui/material/Button";
import Link from "next/link";
import categoriesData from "../app/categoriesData";

export default function CategoriasDropDown({ hideMenu }) {
  //dropdown on menu functions
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  /* categories rendering */
  function categoryRendering() {
    return categoriesData?.map((element, index) => (
      <Link href={element.category} key={index}>
        <MenuItem onClick={handleClose}>{element.category}</MenuItem>
      </Link>
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
        <div onClick={hideMenu}>{categoryRendering()}</div>
      </Menu>
    </>
  );
}
