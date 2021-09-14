import React, { useState } from "react";
import { Grid, IconButton, Typography } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import TextFormField from "../../components/TextFormField";
import { USERS_FIELDS as uf } from "../../commons/fields";
import CustomButton from "../../components/Button";

export default function FormLogin({ error }) {
  const [showPass, setShowPass] = useState(false);

  return (
    <Grid item container spacing={3} alignContent="flex-start">
      <Grid item xs={12}>
        <Typography variant="h5" color="primary">
          Fazer Login
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <TextFormField required fullWidth label="Email" name={uf.EMAIL} />
      </Grid>
      <Grid item xs={12}>
        <TextFormField
          required
          fullWidth
          label="Senha"
          name={uf.PASSWORD}
          type={showPass ? "text" : "password"}
          iconRigth={
            <IconButton onClick={() => setShowPass(!showPass)}>
              {showPass ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          }
        />
      </Grid>
      <Grid item xs={12} container justifyContent="center">
        <CustomButton width={380} type="submit">
          Entrar
        </CustomButton>
      </Grid>
    </Grid>
  );
}
