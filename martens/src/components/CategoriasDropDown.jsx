"use client";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import Button from "@mui/material/Button";
import Link from "next/link";
import categoriesData from "../app/categoriesData";
// import { useRouter } from 'next/navigation';

export default function CategoriasDropDown({ hideMenu }) {
  // const router = useRouter();

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
    return categoriesData?.map((element) => (
      <Link href={`/productos?categoria=${element.code}`} key={element.id}>
        <MenuItem onClick={handleClose}>{element.title}</MenuItem>
      </Link>
      // <button type="button" onClick={() => router.push(`/productos?categoria=${element.code}`)} key={element.id}>
      //   {element.title}
      // </button>
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
