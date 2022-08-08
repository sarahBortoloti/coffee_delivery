import { ThemeProvider } from 'styled-components';
import defaultTheme from './styles/defaultTheme'

function App() {

  return (
    <ThemeProvider theme={defaultTheme()}>
      <div className="App" />
    </ThemeProvider>
  )
}

export default App
