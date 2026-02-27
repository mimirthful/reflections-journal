
import './App.css'
import TodoList from './TodoList'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

function App() {

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <>
        <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <TodoList/>
      </ThemeProvider>
    </>
  )
}

export default App
