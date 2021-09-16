import React, { useState } from "react";
import CustomTextField from "../../components/TexfField";
import { CONTACT_FIELDS as cf } from "../../commons/fields";
import { Grid, IconButton, Typography, Checkbox } from "@material-ui/core";
import { Add, WhatsApp, AlternateEmail, Language } from "@material-ui/icons";

import { PLACEHOLDERS as pl } from "../../commons/texts";
import { TIPOS_CONTATOS as tc } from "../../commons/values";

import { removeMask } from "../../utils/helpers";
import { formatNumberFone } from "../../utils/formatters";
import { masks } from "../../utils/masks";
import { useStyles } from "./styles";

import ContactItem from "../../components/ContactItem";
import CustomSelect from "../../components/Select";

export default function FormContacts({
  listContatos = [],
  onChangeAdd,
  onChangeRemove,
  disabled,
  height,
}) {
  const classes = useStyles({ height });
  const tipos = Object.values(tc);

  const initialState = {
    [cf.TYPE]: tipos[0],
    [cf.PHONE]: null,
    [cf.EMAIL]: null,
    [cf.SITE]: null,
    [cf.WHATSAPP]: false,
  };

  const [error, setError] = useState(null);
  const [contato, setContato] = useState(initialState);

  const handleChangeAdd = () => {
    if (contato[cf.TYPE] === tc.TELEFONE && !contato[cf.PHONE]) {
      setError("Campo obrigatório");
      return;
    }

    if (contato[cf.TYPE] === tc.CELULAR && !contato[cf.PHONE]) {
      setError("Campo obrigatório");
      return;
    }

    if (contato[cf.TYPE] === tc.EMAIL && !contato[cf.EMAIL]) {
      setError("Campo obrigatório");
      return;
    }

    if (contato[cf.TYPE] === tc.SITE && !contato[cf.SITE]) {
      setError("Campo obrigatório");
      return;
    }

    contato[cf.PHONE] = removeMask(contato[cf.PHONE]);

    const isAdd = listContatos.find((c) => {
      if (contato[cf.TYPE] === tc.TELEFONE || contato[cf.TYPE] === tc.CELULAR) {
        return c[cf.PHONE] === contato[cf.PHONE];
      } else if (contato[cf.TIPO] === tc.EMAIL) {
        return c[cf.EMAIL] === contato[cf.EMAIL];
      } else {
        return c[cf.SITE] === contato[cf.SITE];
      }
    });

    if (isAdd) {
      setError("Esse contato já foi adicionado");
      return;
    }

    setError(null);
    setContato(initialState);

    if (onChangeAdd) return onChangeAdd(contato);
  };

  const handleChangeContato = ({ target }) => {
    setError(null);
    setContato((prev) => ({
      ...prev,
      [target.name]: target.value,
    }));
  };

  const getPropsInput = () => {
    let props;

    switch (contato[cf.TYPE]) {
      case tc.EMAIL:
        props = {
          name: cf.EMAIL,
          label: pl.INPUT_EMAIL_CONTATO,
        };
        break;
      case tc.SITE:
        props = {
          name: cf.SITE,
          label: pl.INPUT_SITE_CONTATO,
        };
        break;
      case tc.CELULAR:
        props = {
          showMask: true,
          mask: masks.CELULAR,
          name: cf.PHONE,
          label: pl.INPUT_NUMERO,
          value: contato[cf.PHONE] || "",
          iconRigth: (
            <>
              <Checkbox
                title="Marcar como WhatsApp"
                checked={contato[cf.WHATSAPP]}
                name={cf.WHATSAPP}
                color="primary"
                onChange={({ target }) => {
                  setContato((prev) => ({
                    ...prev,
                    [target.name]: target.checked,
                  }));
                }}
              />
              <WhatsApp style={{ color: "green" }} />
            </>
          ),
        };
        break;
      case tc.TELEFONE:
        props = {
          showMask: true,
          mask: masks.TELEFONE,
          name: cf.PHONE,
          label: pl.INPUT_NUMERO,
          value: contato[cf.PHONE] || "",
          iconRigth: (
            <>
              <Checkbox
                title="Marcar como WhatsApp"
                checked={contato[cf.ISWHATSAPP]}
                name={cf.ISWHATSAPP}
                color="primary"
                onChange={({ target }) => {
                  setContato((prev) => ({
                    ...prev,
                    [target.name]: target.checked,
                  }));
                }}
              />
              <WhatsApp style={{ color: "green" }} />
            </>
          ),
        };
        break;
      default:
        break;
    }

    return props;
  };

  const getIcon = (c) => {
    if (c[cf.PHONE] && c[cf.WHATSAPP]) {
      return <WhatsApp style={{ color: "green" }} />;
    } else if (c[cf.EMAIL]) {
      return <AlternateEmail style={{ color: "blueviolet" }} />;
    } else if (c[cf.SITE]) {
      return <Language style={{ color: "grey" }} />;
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="subtitle1">Adicionar</Typography>
      </Grid>
      <Grid item xs={12} sm={4}>
        <CustomSelect
          name={cf.TYPE}
          disabled={disabled}
          label="tipo"
          value={contato.tipo}
          onChange={handleChangeContato}
          options={tipos.map((e) => ({
            label: e,
            value: e,
          }))}
        />
      </Grid>
      <Grid item xs={12} sm={5}>
        <CustomTextField
          fullWidth
          variant="outlined"
          disabled={disabled}
          onChange={handleChangeContato}
          error={Boolean(error)}
          helperText={error}
          {...getPropsInput()}
        />
      </Grid>
      <Grid item xs>
        <IconButton onClick={handleChangeAdd}>
          <Add className={classes.iconAdd} />
        </IconButton>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="subtitle1">Contatos</Typography>
      </Grid>
      <Grid
        container
        item
        xs={12}
        alignContent="flex-start"
        className={classes.listContatos}
      >
        {listContatos.map((c, i) => (
          <ContactItem
            key={i.toString()}
            icon={getIcon(c)}
            text={formatNumberFone(c[cf.PHONE]) || c[cf.EMAIL] || c[cf.SITE]}
            onClickRemove={() => onChangeRemove(c)}
          />
        ))}
      </Grid>
    </Grid>
  );
}
