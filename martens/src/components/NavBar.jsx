"use client";
import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import CategoriasDropDown from "./CategoriasDropDown";
import CategoriesDropDownMobile from "./CategoriesDropDownMobile";
import Link from "next/link";

//drawer
const drawerWidth = 240;
const navItems = [
  { title: "Inicio", url: "/" },
  { title: "Nosotros", url: "/AboutUsSection" },
  { title: "Contacto", url: "/Form" },
];

/* products and services array */
export const categoriesArray = [
  { name: "Puertas", url: "/product", id: 1 },
  { name: "Portones", url: "/product", id: 2 },
  { name: "Ventanas", url: "/product", id: 3 },
  { name: "Trabajos en hierro", url: "/product", id: 4 },
  { name: "Pérgolas", url: "/product", id: 5 },
  { name: "Soluciones generales", url: "/product", id: 6 },
];

export function NavBar(props) {
  //drawer functions
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Martens aberturas
      </Typography>
      <Divider />
      <List onClick={handleDrawerToggle}>
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <Link href={item.url}>
              <ListItemButton>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
      <CategoriesDropDownMobile hideMenu={handleDrawerToggle} />
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <AppBar component="nav" sx={{ backgroundColor: "#fff" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" }, color: "black" }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{ display: { xs: "none", sm: "block" }, width: "fit-content" }}
          >
            <img
              src={
                "https://res.cloudinary.com/dmatgvjjy/image/upload/v1682619752/martens/martens_pkx8qa.png"
              }
              alt="Logo"
              style={{ height: "40px" }}
            />
          </Box>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              gap: "20px",
              alignItems: "center",
              color: "black",
            }}
          >
            {navItems.map((item) => (
              <Link key={item.id} href={item.url}>
                {item.title.toUpperCase()}
              </Link>
            ))}
            <CategoriasDropDown />
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
}
