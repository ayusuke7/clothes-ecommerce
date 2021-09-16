import React, { useEffect, useRef, useState } from "react";
import { Grid } from "@material-ui/core";
import { Form } from "@unform/web";
import { useStyles } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../store/slices/user";

import FormLogin from "../../forms/FormLogin";
import FormAdresses from "../../forms/FormAdress";
import FormUser from "../../forms/FormUser";
import CustomButton from "../../components/Button";

import {
  validateFormLogin,
  validateFormRegistro,
} from "../../utils/validators";

import { Redirect } from "react-router";
import { ACCOUNT_PAGE } from "../../routes/routes";

export default function LoginOrRegisterPage() {
  const classes = useStyles();
  const formRef = useRef(null);
  const dispatch = useDispatch();

  const [isLogin, setIsLogin] = useState(true);

  const { user, registed, loading } = useSelector((state) => ({
    user: state.user.data,
    loading: state.user.loading,
    registed: state.user.registed,
  }));

  async function handleSubmit(data) {
    const { setErrors } = formRef.current;
    const validator = isLogin ? validateFormLogin : validateFormRegistro;
    const isValid = await validator(data, setErrors);

    if (isValid) {
      const action = isLogin
        ? userActions.getLoginRequest(data)
        : userActions.getRegisterRequest(data);

      dispatch(action);
    }
  }

  useEffect(() => {
    if (registed) {
      setIsLogin(true);
    }
  }, [registed]);

  if (user && !loading) {
    return <Redirect to={ACCOUNT_PAGE} />;
  }

  return (
    <Form ref={formRef} onSubmit={handleSubmit}>
      <Grid item container className={classes.container}>
        {isLogin ? (
          <Grid item xs={12} md={4} container>
            <FormLogin />
          </Grid>
        ) : (
          <Grid item xs={12} container>
            <FormUser title="Registrar" sizes={{ xs: 12, md: 6 }} />
            <FormAdresses title="Endereço" sizes={{ xs: 12, md: 6 }} />
          </Grid>
        )}

        <Grid item xs={12} container justifyContent="center">
          <CustomButton width={380} margin="30px 0 0 0" type="submit">
            {isLogin ? "Entrar" : "Cadastrar"}
          </CustomButton>
        </Grid>

        <Grid item xs={12} container justifyContent="center">
          <CustomButton
            disabled={loading}
            width={380}
            bgColor="gray"
            margin="15px 0"
            onClick={() => {
              setIsLogin(!isLogin);
            }}
          >
            {isLogin ? "Quero me Cadastrar" : "Fazer Login"}
          </CustomButton>
        </Grid>
      </Grid>
    </Form>
  );
}
