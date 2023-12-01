import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './rotas/App';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components';
// aqui é feita a crição de estilos globais.
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// este import de router cria rotas no react para podemor manipularmos as urls
import Header from './componentes/Header';
import { Favoritos } from './rotas/Favoritos';
const GlobalStyle = createGlobalStyle`

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}




`

const root = ReactDOM.createRoot(document.getElementById('root'));
// este aqui é um compnente de classe

root.render(
  <React.StrictMode>

    <GlobalStyle />
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
    {/* dentro de browser router podemos criar rotas e manipularmos o caminho delas dentro deste atributos */}
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
