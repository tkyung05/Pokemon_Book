import { ThemeProvider } from "styled-components";
import { Router } from "./Router";
import { GlobalStyle } from "./styles";
import { defaultTheme } from "./styles/theme/theme";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />z
      <Router />
    </ThemeProvider>
  );
}

export default App;
