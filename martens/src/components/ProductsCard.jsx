import products from "../app/data.js";
import { CardActionArea, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2.js";
import Box from "@mui/material/Box";
import CardsModal from "./CardsModal.jsx";

function PorductsCard({ handle }) {
  products.map((product) => {
    <CardsModal product={product.image} />;
    return (
      <>
        <Grid2 xs={12} sm={12} md={4}>
          <Box sx={{ width: "100%" }}>
            <Card key={product.id}>
              <CardActionArea onClick={handle}>
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
      </>
    );
  });
}

export default PorductsCard;
