import React, { useCallback, useEffect, useState } from "react";
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Slider,
  Typography,
} from "@material-ui/core";
import { useStyles } from "./styles";
import { PRODUCT_PAGE } from "../../routes/routes";
import { LABELS } from "../../commons/texts";
import {
  PRODUCT_FIELDS as pf,
  RESOURCES_FIELDS as rf,
  CATEGORYS_FIELDS as cf,
} from "../../commons/fields";
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "../../store/slices/products";
import ProductCard from "../../components/ProductCard";
import { formatMoney } from "../../utils/formatters";
import { calculateOffPrice } from "../../utils/helpers";
import Categorys from "../../components/Categorys";
import _ from "lodash";

var ORDERS = [
  {
    value: "1",
    label: "Ordernação padrão",
  },
  {
    value: "2",
    label: "Ordenar por mais recente",
  },
  {
    value: "3",
    label: "Ordenar por menor preço",
  },
  {
    value: "4",
    label: "Ordenar por maior preço",
  },
];

export default function ShopPage({ history }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [max, setMax] = useState(100);
  const [order, setOrder] = useState("1");
  const [value, setValue] = useState(null);

  const { products } = useSelector((state) => ({
    products: state.products.data,
  }));

  const handleChangePrice = (e, newValue) => {
    setValue(newValue);
  };

  const handleChangeOrder = ({ target }) => {
    setOrder(target.value);
  };

  const setFilterProducts = () => {
    const orderBy = products.filter((f) => Number(f[pf.PRICE]) <= value);

    /* Ordernação */
    if (order === "2") {
      orderBy.sort(
        (a, b) => new Date(b[pf.CREATED_AT]) - new Date(a[pf.CREATED_AT])
      );
    } else if (order === "3") {
      orderBy.sort((a, b) => Number(a[pf.PRICE]) - Number(b[pf.PRICE]));
    } else if (order === "4") {
      orderBy.sort((a, b) => Number(b[pf.PRICE]) - Number(a[pf.PRICE]));
    }

    return orderBy;
  };

  const getProducts = useCallback(() => {
    if (products.length === 0) {
      dispatch(productActions.getProductData());
    }
  }, [products, dispatch]);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  useEffect(() => {
    if (products.length > 0) {
      const maximo = _.maxBy(products, pf.PRICE)?.[pf.PRICE];
      setMax(Number(maximo));
      setValue(Number(maximo));
    }
  }, [products]);

  const filterProducts = setFilterProducts();

  return (
    <Grid container className={classes.container}>
      <Grid item xs={12} container>
        <Typography className={classes.title}>{LABELS.LB_SHOP}</Typography>
      </Grid>

      <Grid item xs={12} container>
        <Categorys />
      </Grid>

      <Grid item xs={12} container className={classes.filter}>
        <Grid item xs={12} md={8} container alignItems="center">
          <Typography>{LABELS.LB_FILTER_PRICE}</Typography>
          <div className={classes.slider}>
            <Slider
              step={10}
              max={max}
              value={value}
              onChange={handleChangePrice}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
            />
          </div>
          <Typography>{formatMoney(value)}</Typography>
        </Grid>

        <Grid item xs={12} md={4} container justifyContent="flex-end">
          <FormControl
            fullWidth
            variant="outlined"
            className={classes.formControl}
          >
            <InputLabel>Ordernar</InputLabel>
            <Select value={order} onChange={handleChangeOrder}>
              {ORDERS.map((order) => (
                <MenuItem key={order.value} value={order.value}>
                  {order.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      <Grid item xs={12} container spacing={3}>
        {filterProducts.map((product) => (
          <ProductCard
            margin="10px 0"
            key={`crd-${product[pf.ID]}`}
            sizes={{ xs: 12, sm: 6, md: 3 }}
            image={product[pf.RESOURCES][0][rf.PATH]}
            name={product[pf.NAME]}
            price={calculateOffPrice(product[pf.PRICE], product[pf.OFF])}
            category={product[pf.CATEGORYS]?.map((c) => (
              <a key={`cat-${c[cf.ID]}`} href="/#">
                {c[cf.NAME]}
              </a>
            ))}
            onClick={() => {
              history.push(`${PRODUCT_PAGE}/${product[pf.ID]}`);
            }}
          />
        ))}
      </Grid>
    </Grid>
  );
}
