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
import { useState } from "react";

//modal styles:
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

function ProductsCard({ category }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
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
      <Box sx={{ paddingTop: "6rem" }}>
        <Container>
          <Grid container spacing={5}>
            {filteredProds.map((product) => (
              <Grid key={product.id} item xs={12} sm={6} md={4} lg={4}>
                <Card elevation={8}>
                  <Box>
                    <CardActionArea onClick={handleOpen}>
                      <CardMedia sx={{ height: 300 }} image={product.image} />
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
                {/*   modal component */}
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby={product.id}
                >
                  <Box sx={ModalStyles}>
                    <img
                      src={product.image}
                      loading="lazy"
                      alt="producto img"
                      id={product.id}
                    />
                  </Box>
                </Modal>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default ProductsCard;
