import { formatDateBrToUsIso, formatMoney } from "./formatters";

export const randomHashStr = (size = 6) => {
  return Math.random().toString(36).substring(2, size);
};

export const convertBase64ToPdf = (base, name) => {
  const linkSource = `data:application/pdf;base64,${base}`;
  const downloadLink = document.createElement("a");
  const fileName = `${name}.pdf`;

  downloadLink.href = linkSource;
  downloadLink.download = fileName;
  downloadLink.click();
};

export const orderByDate = (data, field) => {
  if (data && field) {
    const sortData = [...data];

    sortData.sort((a, b) => {
      const c = new Date(formatDateBrToUsIso(a[field])).getTime();
      const d = new Date(formatDateBrToUsIso(b[field])).getTime();

      return d - c;
    });

    return sortData;
  }
  return [];
};

export const orderByLength = (data) => {
  const sortData = [...data];

  sortData.sort((a, b) => b.length - a.length);

  return sortData;
};

export const comparaStrings = (a, b, comparador = "=") => {
  const types = typeof a === typeof b;

  if (!types) return false;

  /* remove acentos e espaços */
  const normA = a
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();

  const normB = b
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();

  if (comparador === "=") return normA === normB;

  if (comparador === "!=") return normA !== normB;

  return false;
};

export const calculateOffPrice = (price, off) => {
  if (off !== null) {
    const value = Number(price);
    const discount = (value - (off / 100) * value).toFixed(2);

    return (
      <>
        <span>{formatMoney(value)}</span>
        {formatMoney(discount)}
      </>
    );
  }

  return formatMoney(price);
};

export const validateCPF = (strCPF) => {
  strCPF = strCPF.replace(/[^\d]+/g, "");
  let Soma;
  let Resto;
  Soma = 0;
  if (
    strCPF === "00000000000" ||
    strCPF === "11111111111" ||
    strCPF === "22222222222" ||
    strCPF === "33333333333" ||
    strCPF === "44444444444" ||
    strCPF === "55555555555" ||
    strCPF === "66666666666" ||
    strCPF === "77777777777" ||
    strCPF === "88888888888" ||
    strCPF === "99999999999"
  )
    return false;
  for (let i = 1; i <= 9; i++)
    Soma += parseInt(strCPF.substring(i - 1, i)) * (11 - i);
  Resto = (Soma * 10) % 11;
  if (Resto === 10 || Resto === 11) Resto = 0;
  if (Resto !== parseInt(strCPF.substring(9, 10))) return false;
  Soma = 0;
  for (let i = 1; i <= 10; i++)
    Soma += parseInt(strCPF.substring(i - 1, i)) * (12 - i);
  Resto = (Soma * 10) % 11;
  if (Resto === 10 || Resto === 11) Resto = 0;
  if (Resto !== parseInt(strCPF.substring(10, 11))) return false;
  return true;
};

export const validateCNPJ = (cnpj) => {
  if (cnpj) {
    cnpj = cnpj.replace(/[^\d]+/g, "");
    if (cnpj.length !== 14) return false;
    if (/^(\d)\1+$/.test(cnpj)) return false;

    const t = cnpj.length - 2;
    const d = cnpj.substring(t);
    const d1 = parseInt(d.charAt(0));
    const d2 = parseInt(d.charAt(1));
    const calc = (x) => {
      const n = cnpj.substring(0, x);
      let y = x - 7;
      let s = 0;
      let r = 0;

      for (let i = x; i >= 1; i--) {
        s += n.charAt(x - i) * y--;
        if (y < 2) y = 9;
      }

      r = 11 - (s % 11);
      return r > 9 ? 0 : r;
    };

    return calc(t) === d1 && calc(t + 1) === d2;
  }
  return cnpj;
};

export const validateCPFAndCNPJ = (strCpfCnpj) => {
  const cpfCnpj = strCpfCnpj.replace(/[^0-9]/g, "");
  if (cpfCnpj.length <= 11) {
    return validateCPF(cpfCnpj);
  }
  return validateCNPJ(cpfCnpj);
};

/* export const unionBase64ToPdf = (base1, base2) => {
    const pdf = new jsPDF();

    const imgFrente = 'data:image/png;base64,'.concat(base1);
    const imgVerso = 'data:image/png;base64,'.concat(base2);

    pdf.setFontSize(24);
    pdf.text('Carteirinha', 80, 15);

    pdf.text('Frente', 10, 30);
    pdf.addImage(imgFrente, 'PNG', 30, 40, 150, 100);

    pdf.text('Verso', 10, 155);
    pdf.addImage(imgVerso, 'PNG', 30, 165, 150, 100);

    pdf.save('carteirinha.pdf');
}; */

export const capitalizeText = (text) => {
  if (!text) return "";
  return text.charAt(0).toUpperCase().concat(text.substr(1).toLowerCase());
};

export const capitalizePharse = (text) => {
  if (!text) return "";

  const blacklist = [
    "ac",
    "al",
    "ap",
    "am",
    "ba",
    "ce",
    "df",
    "es",
    "go",
    "ma",
    "mt",
    "ms",
    "mg",
    "pa",
    "pb",
    "pr",
    "pe",
    "pi",
    "rj",
    "rn",
    "rs",
    "ro",
    "rr",
    "sc",
    "sp",
    "se",
    "to",
    "bb",
    "da",
    "de",
    "do",
    "apc",
  ];

  const capitalize = text
    .split(" ")
    .reduce((acum, t) => {
      if (t) {
        const str = !blacklist.includes(t.toLowerCase())
          ? t.charAt(0).toUpperCase().concat(t.substr(1).toLowerCase())
          : t;
        acum.push(str);
      }
      return acum;
    }, [])
    .join(" ");

  return capitalize;
};

export const spreadText = (text, limit = 50, spreed = true) => {
  if (!text || text.length <= limit) return text;
  return text.substring(0, limit).concat(spreed ? "..." : "");
};
