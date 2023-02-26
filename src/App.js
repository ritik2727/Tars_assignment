import logo from './logo.svg';
import './App.css';
import Images from './components/Images';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './components/Header';

const theme = createTheme();
function App() {

  return (
    <ThemeProvider theme={theme}>
    {/* <div className="App"> */}
     
      
    <Images/>
    {/* </div> */}
    </ThemeProvider>
  );
}

export default App;
