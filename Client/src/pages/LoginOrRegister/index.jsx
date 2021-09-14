import React, { useRef, useState } from "react";
import { Grid } from "@material-ui/core";
import { Form } from "@unform/web";
import { useStyles } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../store/slices/user";

import FormLogin from "../../forms/FormLogin";
import CustomButton from "../../components/Button";
import FormRegister from "../../forms/FormRegister";
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

  const { user, loading } = useSelector((state) => ({
    user: state.user.data,
    loading: state.user.loading,
  }));

  const [isLogin, setIsLogin] = useState(true);

  async function handleSubmit(data) {
    const { setErrors } = formRef.current;
    const validator = isLogin ? validateFormLogin : validateFormRegistro;
    const isValid = await validator(data, setErrors);
    if (isValid) {
      dispatch(userActions.getLoginRequest(data));
    }
  }

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
            <FormRegister />
          </Grid>
        )}
        <Grid item xs={12} container justifyContent="center">
          <CustomButton
            disabled={loading}
            width={380}
            onClick={() => {
              setIsLogin(!isLogin);
            }}
            bgColor="gray"
            margin="15px 0"
          >
            {isLogin ? "Quero me Cadastrar" : "Fazer Login"}
          </CustomButton>
        </Grid>
      </Grid>
    </Form>
  );
}
