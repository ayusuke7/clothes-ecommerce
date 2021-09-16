import React, { useState } from "react";
import { Grid, IconButton, Typography } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { ADDRESS_FIELDS as af } from "../../commons/fields";
import TextFormField from "../../components/TextFormField";
import CustomButton from "../../components/Button";
import { masks } from "../../utils/masks";
import CustomSelect from "../../components/Select";
import { ESTADOS } from "../../commons/values";
import { PLACEHOLDERS as pl } from "../../commons/texts";

export default function FormAdresses({
  disabled,
  selectedState,
  onSearchCep,
  rootForm,
  submited,
  sizes,
  title,
}) {
  const [cep, setCep] = useState(null);

  async function handleGetCep() {
    return onSearchCep(cep);
  }

  function formName(name) {
    if (rootForm) return `${rootForm}.${name}`;
    return name;
  }

  return (
    <Grid item container {...sizes}>
      <Grid item xs={12} container spacing={2} alignContent="flex-start">
        <Grid item xs={12} container alignItems="center">
          {title && (
            <Typography variant="h6" color="primary">
              {title}
            </Typography>
          )}
        </Grid>
        <Grid item xs={8} sm={5}>
          <TextFormField
            fullWidth
            required
            label="CEP"
            disabled={disabled}
            name={formName(af.ZIPCODE)}
            mask={masks.CEP}
            onChange={({ target }) => {
              setCep(target.value);
            }}
            iconRigth={
              <IconButton disabled={disabled} onClick={handleGetCep}>
                <Search />
              </IconButton>
            }
          />
        </Grid>
        <Grid item xs={10}>
          <TextFormField
            fullWidth
            required
            disabled={disabled}
            label="Logradouro"
            name={formName(af.ADDRESS)}
          />
        </Grid>
        <Grid item xs={2}>
          <TextFormField
            fullWidth
            disabled={disabled}
            label="Número"
            name={formName(af.NUMBER)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextFormField
            fullWidth
            disabled={disabled}
            label="Bairro"
            required
            name={formName(af.DISTRICT)}
          />
        </Grid>
        <Grid item xs={8}>
          <TextFormField
            fullWidth
            disabled={disabled}
            label="Cidade"
            required
            name={formName(af.CITY)}
          />
        </Grid>
        <Grid item sm={4}>
          <CustomSelect
            disabled={disabled}
            label={pl.INPUT_ESTADO}
            name={formName(af.STATE)}
            initialValue={selectedState || ESTADOS[0].sigla}
            options={ESTADOS.map((e) => ({
              label: `${e.sigla} - ${e.nome}`,
              value: e.sigla,
            }))}
          />
        </Grid>
        <Grid item xs={12}>
          <TextFormField
            fullWidth
            disabled={disabled}
            label="Complemento"
            name={formName(af.COMPLETE)}
          />
        </Grid>
      </Grid>

      {submited && (
        <Grid item xs={12} container justifyContent="center">
          <CustomButton width={380} margin="30px 0 0 0" type="submit">
            Cadastrar
          </CustomButton>
        </Grid>
      )}
    </Grid>
  );
}
