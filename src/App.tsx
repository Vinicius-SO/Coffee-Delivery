import { DefaultTheme, ThemeProvider, useTheme } from 'styled-components'
import { GlobalStyles } from "./styles/global"

import { defaultTheme } from "./styles/theme/default"
import { Home } from "./Pages/Home"





function App (){
  return (
    <ThemeProvider theme={defaultTheme}>
      <Home></Home>
      <GlobalStyles/>
    </ThemeProvider>
  )
}

export default App