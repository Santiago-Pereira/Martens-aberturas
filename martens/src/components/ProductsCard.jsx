import products from "../app/productsData.js";
import { CardActionArea, Container, Grid, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import CardsModal from "./CardsModal.jsx";

function ProductsCard({ category }) {
  let filteredProds = products.filter((prod) => prod.category === category);
  return (
    <>
      <Typography
        component={"h3"}
        variant="h3"
        sx={{ paddingTop: "6rem", textAlign: "center" }}
      >
        Nuestros productos
      </Typography>
      <Box sx={{ paddingTop: "6rem" }}>
        <Container>
          <Grid container spacing={2}>
            {filteredProds.map((product) => (
              <Grid key={product.id} item xs={12} sm={6} md={4} lg={4}>
                <Card>
                  <Box>
                    <CardActionArea>
                      <CardMedia
                        sx={{ height: 300 }}
                        image={
                          "https://res.cloudinary.com/ddfz8iwnf/image/upload/v1684450105/samples/WhatsApp_Image_2023-05-18_at_7.42.23_PM_dktwgb.jpg"
                        }
                      />
                    </CardActionArea>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {product.name}
                      </Typography>
                      <Typography variant="h6" color="text.secondary">
                        {product.name}
                      </Typography>
                    </CardContent>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default ProductsCard;
