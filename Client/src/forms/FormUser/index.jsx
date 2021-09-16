import React, { useState } from "react";
import {
  FormControl,
  Grid,
  MenuItem,
  Select,
  Typography,
} from "@material-ui/core";
import { CONTACT_FIELDS as cf, USERS_FIELDS as uf } from "../../commons/fields";
import { TIPOS_CONTATOS as tc } from "../../commons/values";
import CustomButton from "../../components/Button";
import TextFormField from "../../components/TextFormField";
import { masks } from "../../utils/masks";

export default function FormUser({ title, disabled, submited, sizes }) {
  const [type, setType] = useState(tc.CELULAR);

  function handleChangeType({ target }) {
    setType(target.value);
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

        <Grid item xs={12} container>
          <Grid item xs={8} sm={5}>
            <TextFormField
              required
              fullWidth
              disabled={disabled}
              label="CPF"
              name={uf.CPF}
              mask={masks.CPF}
            />
          </Grid>
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextFormField
            disabled={disabled}
            required
            fullWidth
            label="Nome"
            name={uf.FIRST_NAME}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextFormField
            required
            fullWidth
            disabled={disabled}
            label="Sobrenome"
            name={uf.LAST_NAME}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth variant="outlined">
            <Select
              disabled={disabled}
              value={type}
              onChange={handleChangeType}
            >
              {[tc.CELULAR, tc.TELEFONE].map((item, i) => (
                <MenuItem key={`mnu-${i}`} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextFormField
            required
            fullWidth
            disabled={disabled}
            label="Telefone"
            name={cf.PHONE}
            mask={type === tc.CELULAR ? masks.CELULAR : masks.TELEFONE}
          />
        </Grid>

        <Grid item xs={12}>
          <TextFormField
            required
            fullWidth
            disabled={disabled}
            label="Email"
            name={uf.EMAIL}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextFormField
            required
            fullWidth
            disabled={disabled}
            label="Senha"
            name={uf.PASSWORD}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextFormField
            required
            fullWidth
            disabled={disabled}
            label="Confirma"
            name="confirm"
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
