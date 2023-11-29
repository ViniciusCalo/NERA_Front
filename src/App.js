import React from 'react';
import GlobalStyle from './styles/global'
//import TelaLogin from './components/TelaLogin'
import MenuLateral from './components/MenuLateral'
import TelaPerfil from './components/TelaPerfil'


function App() {
  return (
    <>
    <MenuLateral/>
    <TelaPerfil/>
    <GlobalStyle/>
    </>
  );
}

export default App;
