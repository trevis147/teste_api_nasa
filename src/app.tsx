import { RouterProvider } from "react-router-dom";
import RoutesPage from "./routes/routesPage";

import { ThemeProvider, DefaultTheme } from "styled-components";
import usePeristedState from "./utils/usePersistedState";

import light from "./theme/themes/light";
import dark from "./theme/themes/dark";

import GlobalStyle from "./theme/global";
import Header from "./components/header";
import "./styles.css";

function App() {
  const [theme, setTheme] = usePeristedState<DefaultTheme>("theme", light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header toggleTheme={toggleTheme} />
      <RouterProvider router={RoutesPage} />
    </ThemeProvider>
  );
}

export default App;
