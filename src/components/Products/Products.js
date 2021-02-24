import React from "react";
import { Grid } from "@material-ui/core";

import Product from "./Product/Product";
import useStyles from "./styles";

// const products = [
//   {
//     id: 1,
//     name: "Shoes",
//     description: "Running shoes",
//     price: "$5",
//     image:
//       "https://cdn.dribbble.com/users/4208985/screenshots/14958822/media/2becb56653104d40ab43459eadaa3109.png"
//   },
//   {
//     id: 1,
//     name: "Shoes",
//     description: "Running shoes",
//     price: "$10",
//     image:
//       "https://cdn.dribbble.com/users/774375/screenshots/14466041/media/3e0e72dc96e6f4f077356c66f3d7307a.png"
//   }
// ];

const Products = ({ products, onAddToCart }) => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
