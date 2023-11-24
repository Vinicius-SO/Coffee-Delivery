import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/theme/default'

import { ThemeProvider } from 'styled-components'

// import { Button } from './components/Button'

import { BrowserRouter} from 'react-router-dom'
import { Router } from './Router'
import { ShoppingCartProvider } from './context/ShoppingCartContext'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <ShoppingCartProvider>
          <Router/>
          <GlobalStyles />
        </ShoppingCartProvider>
      
      </BrowserRouter>
    </ThemeProvider>
    )
}

export default App