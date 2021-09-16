export const SHARED_FIELDS = {
  ID: "id",
  CREATED_AT: "createdAt",
  UPDATED_AT: "updatedAt",
};

export const USERS_FIELDS = {
  FIRST_NAME: "firstname",
  LAST_NAME: "lastname",
  EMAIL: "email",
  TYPE: "type",
  CPF: "cpf",
  PASSWORD: "password",
  CONFIRM_PASSWORD: "confirm",
  CONTACTS: "contacts",
  ADDRESSES: "addresses",
  ...SHARED_FIELDS,
};

export const RESOURCES_FIELDS = {
  NAME: "name",
  PATH: "path",
  BASE_64: "base64",
  SVG: "svg",
  EXT: "extension",
  ...SHARED_FIELDS,
};

export const PRODUCT_FIELDS = {
  SKU: "sku",
  NAME: "name",
  DESCRIPTION: "description",
  PRICE: "price",
  OFF: "off",
  RESOURCES: "resources",
  CATEGORYS: "categorys",
  INVENTORY: "inventory",
  ...SHARED_FIELDS,
};

export const CATEGORYS_FIELDS = {
  NAME: "name",
  TAGS: "tags",
  ...SHARED_FIELDS,
};

export const INVENTORY_FIELDS = {
  AMOUNT: "amount",
  LIMIT: "limit",
  ATRIBUITE: "atribute",
  ...SHARED_FIELDS,
};

export const ATRIBUTES_FIELDS = {
  NAME: "name",
  VALUE: "value",
  ...SHARED_FIELDS,
};

export const ADDRESS_FIELDS = {
  ADDRESS: "address",
  DISTRICT: "district",
  NUMBER: "number",
  CITY: "city",
  STATE: "state",
  COUNTRY: "country",
  ZIPCODE: "zipcode",
  COMPLETE: "complete",
  USER_ID: "users_id",
  ...SHARED_FIELDS,
};

export const CONTACT_FIELDS = {
  TYPE: "tipo",
  EMAIL: "email",
  PHONE: "phone",
  SITE: "site",
  WHATSAPP: "whatsapp",
  USER_ID: "users_id",
  ...SHARED_FIELDS,
};
