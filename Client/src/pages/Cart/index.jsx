import { Grid, IconButton, Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./styles";
import { LABELS } from "../../commons/texts";
import images from "../../assets/images";
import CustomTextField from "../../components/TexfField";
import { Cancel } from "@material-ui/icons";
import CustomButton from "../../components/Button";

export default function CartPage() {
  const classes = useStyles();

  return (
    <Grid container spacing={3} className={classes.container}>
      <Grid item xs={12} container>
        <Typography className={classes.title}>{LABELS.LB_CART}</Typography>
      </Grid>

      <Grid item xs={12} container className={classes.header}>
        <Grid item xs={1}></Grid>
        <Grid item xs={6}>
          <Typography>Produto</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography>Preço</Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography align="center">Qtde</Typography>
        </Grid>
        <Grid item xs={2} container justifyContent="flex-end">
          <Typography>Sub-Total</Typography>
        </Grid>
      </Grid>

      {Array.from(Array(3)).map((_, i) => (
        <Grid item xs={12} container alignItems="center" key={`itm-${i}`}>
          <Grid item xs={1}>
            <IconButton>
              <Cancel />
            </IconButton>
          </Grid>
          <Grid item xs={6} container alignItems="center">
            <img
              src={images.example}
              alt="example"
              width={80}
              height={80}
              style={{ marginRight: 15 }}
            />
            <Typography>Printed Brown Tshirt - P, Branca</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography>R$ 59,90</Typography>
          </Grid>
          <Grid item xs={1}>
            <CustomTextField
              type="number"
              variant="outlined"
              defaultValue={1}
            />
          </Grid>
          <Grid item xs={2} container justifyContent="flex-end">
            <Typography>R$ 59,90</Typography>
          </Grid>
        </Grid>
      ))}

      <Grid item xs={12} container justifyContent="flex-end">
        <Grid item xs={3}>
          <CustomButton>Atualizar Carrinho</CustomButton>
        </Grid>
      </Grid>

      <Grid item xs={12} container justifyContent="flex-end">
        <Grid item xs={6} container spacing={3}>
          <Grid item xs={12} container className={classes.header}>
            <Typography variant="h6">Resumo</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="body1">Subtotal</Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="subtitle1">R$ 300,00</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="body1">Entrega</Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="subtitle1">PAC: R$ 29,90</Typography>
            <Typography variant="subtitle1">Sedex: R$ 49,90</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="body1">Endereço</Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="subtitle1">
              Rua Praia do Castelo, 65, Vila Mascote
              <br /> São Paulo - SP, CEP 04362-020
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
