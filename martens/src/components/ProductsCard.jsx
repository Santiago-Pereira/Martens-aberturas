import products from "../app/productsData.js";
import { CardActionArea, Container, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2.js";
import Box from "@mui/material/Box";
import CardsModal from "./CardsModal.jsx";

function ProductsCard({ category }) {
  let filteredProds = products.filter((prod) => prod.category === category);
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />

      {category}
      {filteredProds.map((product, index) => (
        <Container key={index}>
          <Grid2 xs={12} sm={12} md={4} lg={4}>
            <Box sx={{ width: "100%" }}>
              <Card>
                <CardActionArea>
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
        </Container>
      ))}
    </>
  );
}

export default ProductsCard;
