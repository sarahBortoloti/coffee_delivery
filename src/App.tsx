import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Home } from './pages/Home';
import { Router } from './routes';
import defaultTheme from './styles/defaultTheme'

function App() {

  return (
    <ThemeProvider theme={defaultTheme()}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
