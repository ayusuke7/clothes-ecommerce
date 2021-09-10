import HomePage from "../pages/Home";
import DetailProduct from "../pages/Product";
import ShopPage from "../pages/Shop";
import AccountPage from "../pages/Account";
import CartPage from "../pages/Cart";

const HOME_PAGE = "/inicio";
const SHOP_PAGE = "/loja";
const PRODUCT_PAGE = "/produto";
const ACCOUNT_PAGE = "/minha-conta";
const CART_PAGE = "/carrinho";

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
    path: CART_PAGE,
    exact: true,
    component: CartPage,
  },
  {
    path: `${PRODUCT_PAGE}/:name`,
    exact: true,
    component: DetailProduct,
  },
];

export { HOME_PAGE, SHOP_PAGE, PRODUCT_PAGE, ACCOUNT_PAGE, CART_PAGE };

export default routes;
