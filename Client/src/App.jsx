import { Container, ThemeProvider } from "@material-ui/core";
import { createBrowserHistory } from "history";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import AppTheme from "./styles/theme";
import AppRoutes from "./routes";
import { store } from "./store";

const history = createBrowserHistory();

export default function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <ThemeProvider theme={AppTheme}>
          <Header />
          <Container>
            <AppRoutes />
          </Container>
          <Footer />
        </ThemeProvider>
      </Router>
    </Provider>
  );
}