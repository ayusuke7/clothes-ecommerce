import React, { useState } from "react";
import {
  Button,
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
import images from "../../assets/images";
import ProductCard from "../../components/ProductCard";
import { LABELS } from "../../commons/texts";

export default function ShopPage({ history }) {
  const classes = useStyles();
  const [value, setValue] = useState([0, 50]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid container className={classes.container}>
      <Grid item xs={12} container>
        <Typography className={classes.title}>{LABELS.LB_SHOP}</Typography>
      </Grid>

      <Grid item xs={12} container className={classes.filter}>
        <Grid item xs={12} md={6} container alignItems="center">
          <Typography>{LABELS.LB_FILTER_PRICE}</Typography>
          <div className={classes.slider}>
            <Slider
              value={value}
              onChange={handleChange}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              /* marks={value.map((v) => ({
                value: v,
                label: `R$ ${v}`,
              }))} */
            />
          </div>
          <Typography>
            R$ {value[0]} - R$ {value[1]}
          </Typography>
        </Grid>

        <Grid item xs={12} md={6} container justifyContent="flex-end">
          <Grid item xs={12} md={8}>
            <FormControl
              fullWidth
              variant="outlined"
              className={classes.formControl}
            >
              <InputLabel id="demo-simple-select-outlined-label">
                Ordernação padrão
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                onChange={() => {}}
                label="Ordernar"
              >
                <MenuItem value={1}>Ordenar por classificação</MenuItem>
                <MenuItem value={2}>Ordenar por mais recente</MenuItem>
                <MenuItem value={3}>Ordenar por menor preço</MenuItem>
                <MenuItem value={4}>Ordenar por maior preço</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} container spacing={3}>
        {Array.from(Array(10)).map((_, i) => (
          <ProductCard
            margin="10px 0"
            key={`crd-${i}`}
            sizes={{ xs: 12, sm: 6, md: 3 }}
            image={images.example}
            name="Printed T-Shirt Blue"
            price="R$ 59,90"
            category="T-Shirts"
            onClick={() => {
              history.push(PRODUCT_PAGE.concat("/Printed T-Shirt Blue"));
            }}
          />
        ))}
      </Grid>
    </Grid>
  );
}
