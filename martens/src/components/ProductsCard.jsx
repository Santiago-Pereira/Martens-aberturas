"use client";
import products from "../app/productsData.js";
import {
  CardActionArea,
  Container,
  Grid,
  Modal,
  Typography,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import { useRef, useState } from "react";

//modal styles:
const ModalStyles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: "100%",
  bgcolor: "background.paper",
  boxShadow: 24,
  display: "block",
  zIndex: 150,
};

function ProductsCard({ category }) {
  const [open, setOpen] = useState(false);

  const modalSrc = useRef();
  const modalAlt = useRef();

  const handleOpen = (src, alt) => {
    setOpen(true);
    modalSrc.current = src;
    modalAlt.current = alt;
  };
  const handleClose = () => setOpen(false);
  //main function
  let filteredProds = products.filter((prod) => prod.category === category);
  return (
    <>
      <Typography
        component={"h3"}
        variant="h3"
        sx={{ paddingTop: "6rem", textAlign: "center" }}
      >
        Nuestros trabajos
      </Typography>
      <Box sx={{ paddingY: "4rem" }}>
        <Container>
          <Grid container spacing={5}>
            {filteredProds.map((product) => (
              <Grid key={product.id} item xs={12} sm={6} md={4} lg={4}>
                <Card elevation={8}>
                  <Box>
                    <CardActionArea
                      onClick={() =>
                        handleOpen(product.imageModal, product.name)
                      }
                    >
                      <CardMedia
                        sx={{ height: 300, maxWidth: "100%" }}
                        image={product.image}
                      />
                    </CardActionArea>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {product.name}
                      </Typography>
                      <Typography variant="h6" color="text.secondary">
                        {product.description}
                      </Typography>
                    </CardContent>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/*   modal component */}
      <Modal open={open} onClose={handleClose} ref={modalSrc}>
        <Box sx={ModalStyles}>
          <img
            id="imageFullScreen"
            src={modalSrc.current}
            loading="lazy"
            alt={modalAlt.current}
            className="img-modal"
          />
        </Box>
      </Modal>
    </>
  );
}

export default ProductsCard;
