const STATUS_MESSAGE = {
  UNAUTORIZED: "Não autorizado!",
  FORBIDEN: "Usuário sem permissão",
  NOTFOUND: "Registro não encontrado!",
  SERVER_ERROR: "Op's algo deu errado, contate o suporte!",
  EMAIL_OR_PASS_INCORRECT: "Email ou Senha inválido",
};

const CODE_MESSAGE = {
  401: STATUS_MESSAGE.UNAUTORIZED,
  403: STATUS_MESSAGE.FORBIDEN,
  404: STATUS_MESSAGE.NOTFOUND,
  500: STATUS_MESSAGE.SERVER_ERROR,
};

const getCodeMessage = (status) => {
  return CODE_MESSAGE?.[status] || "Op's algo deu errado.";
};

const getNotFound = (object) => {
  return `${object || "Registro"} não encontrado!`;
};

const getAlreadyExists = (object) => {
  return `${object || "Registro"} já cadastrado!`;
};

module.exports = {
  STATUS_MESSAGE,
  CODE_MESSAGE,
  getAlreadyExists,
  getCodeMessage,
  getNotFound,
};
