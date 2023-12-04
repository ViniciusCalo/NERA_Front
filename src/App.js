import React from 'react';
//import GlobalStyle from './styles/global
//import TelaLogin from './components/TelaLogin'
import TelaPerfil from './components/TelaPerfil'
import TelaTrilha from './components/TelaTrilha'
import TelaModulo from './components/TelaModulo'
import TelaQuestao from './components/TelaQuestao'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MenuLateral from './components/MenuLateral';




function App() {
  return (
    <>
    <MenuLateral />
      <BrowserRouter>
      <Routes>
        <Route>
          <Route path="perfil" element={<TelaPerfil />} />    
          <Route path="trilha" element={<TelaTrilha />} />
          <Route path="modulo" element={<TelaModulo />} />
          <Route path="questao" element={<TelaQuestao />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>

  )
}

export default App;
