
import "./App.css";
import Images from "./components/Images";
import { createTheme, ThemeProvider } from "@mui/material/styles";


const theme = createTheme();
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Images />
    </ThemeProvider>
  );
}

export default App;
