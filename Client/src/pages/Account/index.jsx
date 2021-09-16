import React, { useCallback, useEffect, useRef, useState } from "react";
import { Form } from "@unform/web";
import { Avatar, Box, Grid, IconButton, Typography } from "@material-ui/core";
import { useStyles } from "./styles";
import { Redirect } from "react-router-dom";
import { LOGIN_OR_REGISTER_PAGE } from "../../routes/routes";
import { useDispatch, useSelector } from "react-redux";
import {
  USERS_FIELDS as uf,
  ADDRESS_FIELDS as af,
  CONTACT_FIELDS as cf,
} from "../../commons/fields";
import { userActions } from "../../store/slices/user";

import FormUser from "../../forms/FormUser";
import FormAdress from "../../forms/FormAdress";
import CustomButton from "../../components/Button";
import { Edit } from "@material-ui/icons";

const BUTTONS = ["Pedidos", "Cadastro", "Endereços"];

export default function AccountPage({ history }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const formRef = useRef(null);

  const [secao, setSecao] = useState(0);

  const { user, info } = useSelector((state) => ({
    user: state.user.data,
    info: state.user.info,
  }));

  const getUserInfo = useCallback(() => {
    if (user) {
      dispatch(userActions.getInfoRequest(user[uf.ID]));
    }
  }, [dispatch, user]);

  useEffect(() => {
    getUserInfo();
  }, [getUserInfo]);

  useEffect(() => {
    if (info) {
      const { contacts } = info;
      formRef.current.setData({
        ...info,
        [cf.PHONE]: contacts[0][cf.PHONE],
      });
    }
  }, [info]);

  if (!user) {
    return <Redirect to={LOGIN_OR_REGISTER_PAGE} />;
  }

  const addresses = info?.[uf.ADDRESSES] || [];

  return (
    <Form ref={formRef}>
      <Grid item container xs={12} className={classes.header}>
        <Grid item xs={6}>
          <Avatar className={classes.avatar}>
            {`${user[uf.FIRST_NAME]}`.charAt(0)}
          </Avatar>
          <Typography align="center" variant="h6">
            {user[uf.FIRST_NAME]} {user[uf.LAST_NAME]}
          </Typography>
          <Typography align="center" variant="subtitle1">
            {user[uf.EMAIL]}
          </Typography>
        </Grid>
      </Grid>

      <Grid item container xs={12} className={classes.container}>
        <Grid item container spacing={4}>
          <Grid item xs={12} md={4} container alignContent="flex-start">
            <Typography className={classes.title}>Painel</Typography>
            <Grid item xs={12} className={classes.options}>
              {BUTTONS.map((button, i) => {
                let props = null;
                if (i !== secao) {
                  props = {
                    bgColor: "#FFF",
                    color: "gray",
                  };
                }
                return (
                  <CustomButton
                    {...props}
                    key={`btn-${button}`}
                    margin="0 0 10px 0"
                    onClick={() => {
                      setSecao(i);
                    }}
                  >
                    {button}
                  </CustomButton>
                );
              })}
            </Grid>
            <CustomButton
              onClick={() => {
                dispatch(userActions.setLogout());
              }}
            >
              SAIR
            </CustomButton>
          </Grid>
          <Grid item xs={12} md={8} container>
            <Box hidden={secao !== 0}>
              <Typography className={classes.title}>
                <span>0 Pedidos</span>
              </Typography>
            </Box>
            <Box hidden={secao !== 1}>
              <Typography className={classes.title}>
                <span>Cadastro</span>
                <IconButton>
                  <Edit color="primary" />
                </IconButton>
              </Typography>
              <FormUser disabled />
            </Box>
            <Box hidden={secao !== 2}>
              <Typography className={classes.title}>
                <span>Endereços</span>
                <IconButton>
                  <Edit color="primary" />
                </IconButton>
              </Typography>
              {addresses.map((address, i) => (
                <FormAdress
                  disabled
                  rootForm={`addresses[${i}]`}
                  selectedState={address[af.STATE]}
                />
              ))}
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Form>
  );
}
