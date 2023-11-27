import React from 'react'
import * as C from './styles'
import Logo from './img/logo.png'

const TelaLogin = () => {
  return (
    <C.Box>
        <C.Logo src={Logo}/>
        <C.FormLogin>
        <C.Input type="text" placeholder="Digite seu email"/>
        <C.Input type="password" placeholder="Digite sua senha"/>
        <C.div>
            <C.Link>Esqueci minha senha</C.Link>
        </C.div>
        <C.Button>Entrar</C.Button>
        ou
        <C.ButtonG>Login com Google</C.ButtonG>
        <C.Button>Criar Conta</C.Button>
        </C.FormLogin>
    </C.Box>
  );
};

export default TelaLogin;