import React from 'react'
import ReactDOM from 'react-dom/client'
import theme from "./styles/theme";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/global.js";
import { Routes } from "./routes";
import { AuthProvider } from './context/Auth';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Routes />
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>,
)
