import * as Yup from "yup";
import { validateCPFAndCNPJ } from "./helpers";

Yup.addMethod(Yup.string, "cpfCnpj", (message) => {
  return Yup.string().test("cpfCnpj", message, validateCPFAndCNPJ);
});
Yup.addMethod(Yup.string, "dtStr", (message) => {
  return Yup.string().test("dtStr", message, (data) => data !== "dd/mm/aaaa");
});

Yup.setLocale({
  mixed: { required: "O campo é obrigatório" },
  string: {
    min: ({ min }) => `O campo deve ter no mínimo ${min} caracteres`,
    max: ({ max }) => `O campo deve ter no máximo ${max} caracteres`,
    email: "E-mail inválido",
  },
  number: {
    min: ({ min }) => `O campo deve ter o valor maior ou igual a ${min}`,
    max: ({ max }) => `O campo deve ter o valor menor ou igual a ${max}`,
  },
});

export default Yup;
