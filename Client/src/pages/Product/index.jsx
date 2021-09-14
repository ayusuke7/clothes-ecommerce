import React, { useCallback, useEffect, useState } from "react";
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
import {
  PRODUCT_FIELDS as pf,
  RESOURCES_FIELDS as rf,
  INVENTORY_FIELDS as vf,
} from "../../commons/fields";

import ProductCard from "../../components/ProductCard";
import { calculateOffPrice } from "../../utils/helpers";
import { useDispatch, useSelector } from "react-redux";
import { infoProductActions } from "../../store/slices/info-product";

export default function DetailProduct({ history }) {
  const classes = useStyles();
  const params = useParams();
  const dispatch = useDispatch();

  const [preview, setPreview] = useState(null);
  const [qtd, setQtd] = useState(1);

  const { infoProduct } = useSelector((state) => ({
    infoProduct: state.infoProduct.data,
  }));

  const resources = infoProduct?.[pf.RESOURCES];
  const saldoProd = infoProduct?.[pf.INVENTORY].reduce(
    (a, b) => a + b[vf.AMOUNT],
    0
  );

  const disabledButton = qtd < 1 || qtd > saldoProd;

  const handleChangeQtd = ({ target }) => {
    setQtd(Number(target.value));
  };

  const getInfoProduct = useCallback(() => {
    if (params?.id) {
      dispatch(infoProductActions.getInfoProduct(params.id));
    }
  }, [params, dispatch]);

  useEffect(() => {
    getInfoProduct();
  }, [getInfoProduct]);

  useEffect(() => {
    if (resources?.length) {
      setPreview(resources[0][rf.PATH]);
    }
  }, [resources]);

  return (
    <Grid container className={classes.container}>
      <Grid item xs={12} container>
        <Grid item xs={12} md container>
          <Grid item xs={12} className={classes.image}>
            <img src={preview} alt={preview} />
          </Grid>
          <Grid item xs={12} container className={classes.carrocel}>
            {resources?.map((resouce) => (
              <Grid item xs={4} md={3} key={resouce[rf.NAME]}>
                <img
                  src={resouce[rf.PATH]}
                  alt={resouce[rf.NAME]}
                  onClick={() => {
                    setPreview(resouce[rf.PATH]);
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <div style={{ width: 40, height: 40 }} />
        <Grid item xs={12} md container alignContent="flex-start">
          <Grid item xs={12} className={classes.info}>
            <Typography variant="h4">{infoProduct?.[pf.NAME]}</Typography>

            <Typography variant="h6" className={classes.price}>
              {calculateOffPrice(
                infoProduct?.[pf.PRICE],
                infoProduct?.[pf.OFF]
              )}
            </Typography>

            <Typography variant="subtitle2">
              {infoProduct?.[pf.DESCRIPTION]}
            </Typography>
          </Grid>

          <Grid item xs={12} container spacing={3}>
            <Grid item xs sm={10} container spacing={2}>
              <Grid item xs={12} sm={2}>
                <CustomTextField
                  type="number"
                  variant="outlined"
                  defaultValue={qtd}
                  onChange={handleChangeQtd}
                  onInput={(e) => {
                    e.target.value = Math.max(0, parseInt(e.target.value))
                      .toString()
                      .slice(0, 2);
                  }}
                />
              </Grid>

              <Grid item xs={12} sm={5}>
                <CustomButton
                  bgColor="gray"
                  height={55}
                  disabled={disabledButton}
                >
                  <AddShoppingCart />
                  <span>Adicionar</span>
                </CustomButton>
              </Grid>

              <Grid item xs={12} sm={5}>
                <CustomButton height={55} disabled={disabledButton}>
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
          {infoProduct?.[pf.DESCRIPTION]}
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
