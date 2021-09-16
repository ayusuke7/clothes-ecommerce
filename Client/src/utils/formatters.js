export const toMask = (value, pattern) => {
  let i = 0;
  const strValue = String(value);
  return pattern.replace(/#/g, () => strValue[i++] || "");
};
export const formatDateUsToBrIso = (date) => {
  if (!date || date.length < 10) return "00/00/0000";

  return date.substr(0, 10).split("-").reverse().join("/");
};

export const formatDateBrToUsIso = (date) => {
  if (!date || date.length < 10) return "00-00-0000";

  return date.substr(0, 10).split("/").reverse().join("-");
};

export const formatCPForCNPJ = (cpfCnpj) => {
  if (!cpfCnpj) return null;
  const mask = cpfCnpj.length > 11 ? "##.###.###/####/##" : "###.###.###-##";
  return toMask(cpfCnpj, mask);
};

export const formatMoney = (value) => {
  if (value === null || isNaN(Number(value))) return "";

  const numValue = Number(value);

  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(numValue);
};

export const formatNumberFone = (fone) => {
  if (!fone || fone?.length > 11) return fone;
  const pattern = fone.length > 10 ? "(##) #####-####" : "(##) ####-####";
  return toMask(fone, pattern);
};
