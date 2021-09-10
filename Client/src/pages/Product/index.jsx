import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { useStyles } from "./styles";
import { useParams } from "react-router";
import images from "../../assets/images";
import CustomButton from "../../components/Button";
import CustomTextField from "../../components/TexfField";
import {
  AddShoppingCart,
  LocalShipping,
  ShoppingCart,
} from "@material-ui/icons";
import ProductCard from "../../components/ProductCard";

export default function DetailProduct({ history }) {
  const classes = useStyles();
  const params = useParams();

  return (
    <Grid container className={classes.container}>
      <Grid item xs={12} container spacing={4}>
        <Grid item xs={12} md={6} container>
          <Grid item xs={12} className={classes.image}>
            <img src={images.example} alt="" />
          </Grid>
          <Grid item xs={12} className={classes.carrocel}>
            <img src={images.example} alt="" />
            <img src={images.example} alt="" />
            <img src={images.example} alt="" />
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} container alignContent="flex-start">
          <Grid item xs={12} className={classes.info}>
            <Typography variant="h4">{params.name}</Typography>

            <Typography variant="h6" className={classes.price}>
              <span>R$79,90</span>
              R$ 59,90
            </Typography>

            <Typography variant="subtitle2">
              Neque porro quisquam est, qui dolore ipsum quia dolor sit amet,
              consectetur adipisci velit, sed quia non incidunt lores ta porro
              ame. numquam eius modi tempora incidunt lores ta porro ame.
            </Typography>
          </Grid>

          <Grid item xs={12} container spacing={3}>
            <Grid item xs={12} container>
              <Grid item xs={8} sm={2}>
                <CustomTextField
                  type="number"
                  variant="outlined"
                  defaultValue={1}
                />
              </Grid>

              <Grid item xs sm={10}>
                <CustomButton
                  bgColor="gray"
                  width={140}
                  height={55}
                  margin="0 10px"
                >
                  <AddShoppingCart />
                  <span>Adicionar</span>
                </CustomButton>
                <CustomButton width={140} height={55}>
                  <ShoppingCart />
                  <span>COMPRAR</span>
                </CustomButton>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <Typography variant="subtitle2">
                Consulte o prazo estimado e valor da entrega
              </Typography>
            </Grid>

            <Grid item xs={12} container>
              <Grid item xs={9} sm={5}>
                <CustomTextField
                  variant="outlined"
                  placeholder="Consultar CEP"
                  iconLeft={<LocalShipping />}
                />
              </Grid>

              <Grid item xs={3} sm={2}>
                <CustomButton width={120} height={55}>
                  Consultar
                </CustomButton>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <Typography color="primary" variant="subtitle2">
                Prazo de entrega de 10 a 15 dias
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} container></Grid>

      <Grid item xs={10} className={classes.description}>
        <Typography variant="h6"> Descrição</Typography>
        <Typography variant="subtitle2">
          <br />
          Neque porro quisquam est, qui dolore ipsum quia dolor sit amet,
          consectetur adipisci velit, sed quia non incidunt lores ta porro ame.
          numquam eius modi tempora incidunt lores ta porro ame.
        </Typography>
      </Grid>

      <Grid item xs={12} container>
        <Grid item xs={12}>
          <Typography variant="h6">Recomendado</Typography>
          <br />
        </Grid>
        <Grid item xs={12} container spacing={4} className={classes.slide}>
          {Array.from(Array(9)).map((_, i) => (
            <ProductCard
              key={`rcm-${i}`}
              image={images.example}
              name="Printed T-Shirt Blue"
              price="R$ 59,90"
              category="T-Shirts"
            />
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
