import TodoList from './TodoList'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Container } from '@mui/material';

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
        <Container maxWidth='sm'>
          <TodoList/>
        </Container>
      </ThemeProvider>
    </>
  )
}

export default App
