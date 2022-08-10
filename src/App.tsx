import { ThemeProvider } from 'styled-components';
import { Home } from './components/Home';
import defaultTheme from './styles/defaultTheme'

function App() {

  return (
    <ThemeProvider theme={defaultTheme()}>
      <div className="App">
        <Home />
      </div>
    </ThemeProvider>
  )
}

export default App
