import HomePage from "../pages/Home";
import DetailProduct from "../pages/Product";
import ShopPage from "../pages/Shop";
import CartPage from "../pages/Cart";
import AccountPage from "../pages/Account";
import CondicoesGerais from "../pages/CondicoesGerais";
import PoliticaPrivacidade from "../pages/PoliticaPrivacidade";
import LoginOrRegisterPage from "../pages/LoginOrRegister";

const HOME_PAGE = "/inicio";
const SHOP_PAGE = "/loja";
const CART_PAGE = "/carrinho";
const PRODUCT_PAGE = "/produto";
const ACCOUNT_PAGE = "/minha-conta";
const LOGIN_OR_REGISTER_PAGE = "/autenticacao";
const POLITICA_PRIVACIDADE_PAGE = "/politica-privacidade";
const CONDICOES_GERAIS_PAGE = "/condicoes-gerais";

const routes = [
  {
    path: HOME_PAGE,
    exact: true,
    component: HomePage,
  },
  {
    path: SHOP_PAGE,
    exact: true,
    component: ShopPage,
  },
  {
    path: ACCOUNT_PAGE,
    exact: true,
    component: AccountPage,
  },
  {
    path: LOGIN_OR_REGISTER_PAGE,
    exact: true,
    component: LoginOrRegisterPage,
  },
  {
    path: CART_PAGE,
    exact: true,
    component: CartPage,
  },
  {
    path: `${PRODUCT_PAGE}/:id`,
    exact: true,
    component: DetailProduct,
  },
  {
    path: POLITICA_PRIVACIDADE_PAGE,
    exact: true,
    component: PoliticaPrivacidade,
  },
  {
    path: CONDICOES_GERAIS_PAGE,
    exact: true,
    component: CondicoesGerais,
  },
];

export {
  HOME_PAGE,
  SHOP_PAGE,
  PRODUCT_PAGE,
  ACCOUNT_PAGE,
  CART_PAGE,
  LOGIN_OR_REGISTER_PAGE,
  POLITICA_PRIVACIDADE_PAGE,
  CONDICOES_GERAIS_PAGE,
};

export default routes;
