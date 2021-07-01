import { TransationsProvider } from "./context/TransactinsContext";
import { Home } from "./pages/Home";
import GlobalStyle from "./styles/global";

export const App = () => (
  <TransationsProvider>
    <GlobalStyle />
    <Home />
  </TransationsProvider>
);
