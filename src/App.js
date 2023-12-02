import React from 'react';
import GlobalStyle from './styles/global'
//import TelaLogin from './components/TelaLogin'
import MenuLateral from './components/MenuLateral'
//import TelaPerfil from './components/TelaPerfil'
//import TelaTrilha from './components/TelaTrilha'
import TelaModulo from './components/TelaModulo'


function App() {
  return (
    <>
      <MenuLateral />
      <TelaModulo />
      <GlobalStyle />
    </>
  );
}

export default App;
