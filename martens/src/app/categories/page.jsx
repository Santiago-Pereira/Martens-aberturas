"use client";
import React from "react";
import products from "../data.js";
import { CardActionArea, Container, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2.js";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

const cardsData = products;

const ModalStyles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function page() {
  const [ModalOpen, setModalOpen] = React.useState(false);
  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  let datoProduct = cardsData.map((product) => {
    return (
      <>
        <Grid2 xs={12} sm={12} md={4}>
          <Box sx={{ width: "100%" }}>
            <Card key={product.id}>
              <CardActionArea onClick={handleModalOpen}>
                <CardMedia sx={{ height: 150 }} image={product.image} />
              </CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product.name}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  {product.name}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid2>

        <Modal
          open={ModalOpen}
          onClose={handleModalClose}
          aria-labelledby="modal-modal-image"
        >
          <Box sx={ModalStyles}>
            <img
              src={product.image}
              loading="lazy"
              alt="producto img"
              id="modal-modal-image"
            />
          </Box>
        </Modal>
      </>
    );
  });

  return (
    <>
      <Container sx={{ backgroundColor: "grey", paddingTop: "64px" }}>
        <Grid2 container rowSpacing={3} spacing={3}>
          <Typography component="h1" variant="h3" align="center">
            Puertas
          </Typography>

          <Typography variant="h6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptatibus maxime quidem eum non culpa iusto, laborum fuga sequi,
            quos amet mollitia aliquam et assumenda quaerat perspiciatis atque
            tempora exercitationem rerum?
          </Typography>
          {datoProduct}
        </Grid2>
      </Container>
    </>
  );
}
