import React from "react";
import { Grid, IconButton, Typography } from "@material-ui/core";
import {
  USERS_FIELDS as uf,
  ADDRESS_FIELDS as af,
  CONTACT_FIELDS as cf,
} from "../../commons/fields";
import TextFormField from "../../components/TextFormField";
import { Search } from "@material-ui/icons";
import CustomButton from "../../components/Button";
//import { useStyles } from './styles';

export default function FormRegister() {
  //const classes = useStyles();

  return (
    <Grid item container spacing={4}>
      <Grid item xs={12} md={6} container spacing={2} alignContent="flex-start">
        <Grid item xs={12}>
          <Typography variant="h6" color="primary">
            Resgitrar
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextFormField required fullWidth label="Nome" name={uf.FIRST_NAME} />
        </Grid>
        <Grid item xs={12}>
          <TextFormField
            required
            fullWidth
            label="Sobrenome"
            name={uf.LAST_NAME}
          />
        </Grid>
        <Grid item xs={6}>
          <TextFormField fullWidth label="Celular" name={cf.CELL} />
        </Grid>
        <Grid item xs={6}>
          <TextFormField fullWidth label="Telefone" name={cf.PHONE} />
        </Grid>
        <Grid item xs={12}>
          <TextFormField required fullWidth label="Email" name={uf.EMAIL} />
        </Grid>
        <Grid item xs={6}>
          <TextFormField required fullWidth label="Senha" name={uf.PASSWORD} />
        </Grid>
        <Grid item xs={6}>
          <TextFormField required fullWidth label="Confirma" name="confirm" />
        </Grid>
      </Grid>

      <Grid item xs={12} md={6} container spacing={2} alignContent="flex-start">
        <Grid item xs={12}>
          <Typography variant="h6" color="primary">
            Endereço
          </Typography>
        </Grid>
        <Grid item xs={5}>
          <TextFormField
            fullWidth
            label="CEP"
            name={af.ZIPCODE}
            iconRigth={
              <IconButton>
                <Search />
              </IconButton>
            }
          />
        </Grid>
        <Grid item xs={12}>
          <TextFormField fullWidth label="Logradouro" name={af.ADDRESS} />
        </Grid>
        <Grid item xs={12}>
          <TextFormField fullWidth label="Bairrp" name={af.DISTRICT} />
        </Grid>
        <Grid item xs={8}>
          <TextFormField fullWidth label="Cidade" name={af.CITY} />
        </Grid>
        <Grid item xs={4}>
          <TextFormField fullWidth label="Estado" name={af.STATE} />
        </Grid>
        <Grid item xs={12}>
          <TextFormField fullWidth label="Complemento" name={af.COMPLETE} />
        </Grid>
      </Grid>
      <Grid item xs={12} container justifyContent="center">
        <CustomButton width={380} margin="30px 0 0 0" type="submit">
          Cadastrar
        </CustomButton>
      </Grid>
    </Grid>
  );
}
