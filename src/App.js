import React from 'react';
//import GlobalStyle from './styles/global'
import Perfil from './pages/Perfil'
import Trilha from './pages/Trilha'
import Modulo from './pages/Modulo'
import Questao from './pages/Questao'
import Login from './pages/LoginAluno';
import { BrowserRouter, Routes, Route } from "react-router-dom";




function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route>
          <Route path="perfil" element={<Perfil />} />    
          <Route path="trilha" element={<Trilha />} />
          <Route path="modulo" element={<Modulo />} />
          <Route path="questao" element={<Questao />} />
          <Route path="login" element={<Login/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>

  )
}

export default App;
