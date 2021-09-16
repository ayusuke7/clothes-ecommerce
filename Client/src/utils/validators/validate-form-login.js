import Yup from "../yup-config";
import { USERS_FIELDS as uf } from "../../commons/fields";

export const validateFormLogin = async (data, setErrors) => {
  try {
    setErrors({});

    const schema = Yup.object().shape({
      [uf.EMAIL]: Yup.string().trim().email(),
      [uf.PASSWORD]: Yup.string().min(8).trim(),
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
