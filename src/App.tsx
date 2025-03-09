import { ThemeProvider } from "styled-components";
import {theme} from "./styles/theme";
import FilterTable from "./components/filters/filtertable";
import Logo from "./assets/logo.png"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <header>
        <img src={Logo} alt="" />
      </header>
    <div className="App">
      <FilterTable />
    </div>
    </ThemeProvider>
  );

}

export default App;
