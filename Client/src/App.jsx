import { Container } from "@material-ui/core";
import { createBrowserHistory } from "history";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";

import Loading from "./components/Loading";
import Footer from "./components/Footer";
import Header from "./components/Header";

import AppRoutes from "./routes";
import { store } from "./store";

const history = createBrowserHistory();

export default function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Header />
        <Container>
          <AppRoutes />
        </Container>
        <Footer />
        <Loading />
      </Router>
    </Provider>
  );
}
