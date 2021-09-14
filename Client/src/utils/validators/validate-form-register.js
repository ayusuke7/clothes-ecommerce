import Yup from "../yup-config";
import { USERS_FIELDS as uf } from "../../commons/fields";

export const validateFormRegistro = async (data, setErrors) => {
  try {
    setErrors({});

    const schema = Yup.object().shape({
      [uf.EMAIL]: Yup.string().email("Email Inválido"),
      [uf.PASSWORD]: Yup.string()
        .min(8)
        .test({
          name: "is-insecurit",
          message: "Senha muito fraca",
          test: (val) => val !== "12345678",
        }),
      [uf.CONFIRM_PASSWORD]: Yup.string().oneOf(
        [Yup.ref(uf.PASSWORD), null],
        "Senha não confere"
      ),
    });

    await schema.validate(data, { abortEarly: false });

    return data;
  } catch (err) {
    const validationErrors = {};
    if (err instanceof Yup.ValidationError) {
      err.inner.forEach((error) => {
        validationErrors[error.path] = error.message;
      });
      setErrors(validationErrors);
    }

    return null;
  }
};
