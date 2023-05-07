import { CssBaseline, ThemeProvider } from "@mui/material"
import { createTheme } from "@mui/material/styles"
import { themeSettings } from './theme'
import { useSelector } from 'react-redux'
import { useMemo } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./scenes/dashboard";
import Layout from "./scenes/layout";
import Products from './scenes/products'
import Customers from "./scenes/customers"

function App() {
  const mode = useSelector(state => state.global.mode)
  const theme = useMemo(()=>createTheme(themeSettings(mode)), [mode])

  return (
    <BrowserRouter>
    <div className="app">
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Routes>
          <Route element={<Layout/>}>
            <Route path='/' element={<Navigate to='/dashboard' replace/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/products' element={<Products/>}/>
            <Route path='/customers' element={<Customers/>}/>
          </Route>
        </Routes>
      </ThemeProvider>
    </div>
    </BrowserRouter>
  )
}

export default App
